#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { loadEnvFile } from "node:process";
import { fileURLToPath } from "node:url";

const command = process.argv[2];

if (!command || command === "--help" || command === "-h") {
	printUsage();
} else if (command !== "generate") {
	console.error(`Unknown command: ${command}\n`);
	printUsage();
	process.exitCode = 1;
} else {
	try {
		await generateTypes();
	} catch (error) {
		console.error(error instanceof Error ? error.message : error);
		process.exitCode = 1;
	}
}

async function generateTypes() {
	const callerRoot = process.cwd();
	const packageRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

	try {
		loadEnvFile(path.join(callerRoot, ".env"));
	} catch (error) {
		if (error?.code !== "ENOENT") {
			throw error;
		}
	}

	const fleetApiPath = process.env.FLEET_API_PATH;
	if (!fleetApiPath) {
		throw new Error("FLEET_API_PATH is not set. Add it to .env or the process environment.");
	}

	const fleetApiTypesPath = process.env.FLEET_API_TYPES_PATH;
	if (!fleetApiTypesPath) {
		throw new Error("FLEET_API_TYPES_PATH is not set. Add it to .env or the process environment.");
	}

	const apiRoot = path.resolve(callerRoot, fleetApiPath);
	const outputPath = path.resolve(callerRoot, fleetApiTypesPath);
	const routerSourcePath = path.join(apiRoot, "src/routers/trpc/index.ts");
	const apiTsconfigPath = path.join(apiRoot, "tsconfig.json");
	const executableExtension = process.platform === "win32" ? ".cmd" : "";
	const callerBiomePath = path.join(callerRoot, `node_modules/.bin/biome${executableExtension}`);
	const packageBiomePath = path.join(packageRoot, `node_modules/.bin/biome${executableExtension}`);
	const biomePath = existsSync(callerBiomePath) ? callerBiomePath : packageBiomePath;
	const requireFromPackage = createRequire(path.join(packageRoot, "package.json"));
	const ts = requireFromPackage("typescript");
	const configResult = ts.readConfigFile(apiTsconfigPath, ts.sys.readFile);

	if (configResult.error) {
		throw new Error(formatTypeScriptDiagnostics(ts, [configResult.error], apiRoot));
	}

	const parsedConfig = ts.parseJsonConfigFileContent(
		configResult.config,
		ts.sys,
		apiRoot,
		{
			declaration: true,
			declarationMap: false,
			emitDeclarationOnly: true,
			incremental: false,
			noEmit: false,
			noEmitOnError: false,
		},
		apiTsconfigPath,
	);

	if (parsedConfig.errors.length > 0) {
		throw new Error(formatTypeScriptDiagnostics(ts, parsedConfig.errors, apiRoot));
	}

	const program = ts.createProgram({
		options: parsedConfig.options,
		rootNames: parsedConfig.fileNames,
	});
	const routerSource = program.getSourceFile(routerSourcePath);

	if (!routerSource) {
		throw new Error(`Unable to load AppRouter source at ${routerSourcePath}.`);
	}

	const sourceDiagnostics = [
		...program.getSyntacticDiagnostics(routerSource),
		...program.getSemanticDiagnostics(routerSource),
	].filter(diagnostic => diagnostic.category === ts.DiagnosticCategory.Error);

	if (sourceDiagnostics.length > 0) {
		throw new Error(formatTypeScriptDiagnostics(ts, sourceDiagnostics, apiRoot));
	}

	let emittedDeclaration;
	const emitResult = program.emit(
		routerSource,
		(fileName, content) => {
			if (fileName.endsWith(".d.ts")) emittedDeclaration = content;
		},
		undefined,
		true,
	);
	const emitDiagnostics = emitResult.diagnostics.filter(
		diagnostic => diagnostic.category === ts.DiagnosticCategory.Error,
	);

	if (emitDiagnostics.length > 0) {
		throw new Error(formatTypeScriptDiagnostics(ts, emitDiagnostics, apiRoot));
	}
	if (!emittedDeclaration) {
		throw new Error(`TypeScript did not emit a declaration for ${routerSourcePath}.`);
	}

	const emittedPath = routerSourcePath.replace(/\.ts$/, ".d.ts");
	const sourceFile = ts.createSourceFile(emittedPath, emittedDeclaration, ts.ScriptTarget.Latest, true);
	const statements = sourceFile.statements.filter(
		statement =>
			ts.isImportDeclaration(statement) ||
			ts.isImportEqualsDeclaration(statement) ||
			(ts.isVariableStatement(statement) &&
				statement.declarationList.declarations.some(
					declaration => ts.isIdentifier(declaration.name) && declaration.name.text === "appRouter",
				)) ||
			(ts.isTypeAliasDeclaration(statement) && statement.name.text === "AppRouter"),
	);

	if (!statements.some(statement => ts.isTypeAliasDeclaration(statement))) {
		throw new Error("AppRouter was not found in the emitted declaration.");
	}

	const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });
	const appRouterDeclaration = statements
		.map(statement => printer.printNode(ts.EmitHint.Unspecified, statement, sourceFile))
		.join("\n")
		.replace(/^(?: {4})+/gm, indentation => "\t".repeat(indentation.length / 4));

	await mkdir(path.dirname(outputPath), { recursive: true });
	await writeFile(
		outputPath,
		`// Generated by \`npx @automateinc/fleet-types generate\`. Do not edit manually.\n${appRouterDeclaration}\n`,
	);

	if (existsSync(biomePath)) {
		const biomeResult = spawnSync(biomePath, ["format", "--write", outputPath], {
			cwd: callerRoot,
			stdio: "inherit",
		});
		if (biomeResult.error) {
			throw biomeResult.error;
		}
		if (biomeResult.status !== 0) {
			throw new Error(`Biome formatting failed with exit code ${biomeResult.status}.`);
		}
	}

	console.log(`Generated ${path.relative(callerRoot, outputPath)} from ${routerSourcePath}`);
}

function formatTypeScriptDiagnostics(ts, diagnostics, currentDirectory) {
	return ts.formatDiagnosticsWithColorAndContext(diagnostics, {
		getCanonicalFileName: fileName => fileName,
		getCurrentDirectory: () => currentDirectory,
		getNewLine: () => "\n",
	});
}

function printUsage() {
	console.log(`Usage: npx @automateinc/fleet-types generate

Commands:
  generate  Generate AppRouter types from Fleet API

Environment variables:
  FLEET_API_PATH        Fleet API path relative to the current directory
  FLEET_API_TYPES_PATH  Generated declaration path relative to the current directory`);
}
