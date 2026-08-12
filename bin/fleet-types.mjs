#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import path from "node:path";
import { loadEnvFile } from "node:process";
import { fileURLToPath } from "node:url";

const SERIALIZED_OUTPUT_TYPES = `type FleetIsAny<T> = 0 extends 1 & T ? true : false;
type FleetSimplify<T> = { [TKey in keyof T]: T[TKey] } & {};
type FleetSerializeObject<T extends object> = {
\t[TKey in keyof T as FleetIsAny<T[TKey]> extends true
\t\t? TKey
\t\t: [T[TKey]] extends [undefined]
\t\t\t? never
\t\t\t: T[TKey] extends (...args: never[]) => unknown
\t\t\t\t? never
\t\t\t\t: TKey]: FleetSerializeOutput<T[TKey]>;
};
type FleetSerializeOutput<T> = FleetIsAny<T> extends true
\t? T
\t: T extends (...args: never[]) => unknown
\t\t? never
\t\t: T extends Date
\t\t\t? string
\t\t\t: T extends readonly (infer TItem)[]
\t\t\t\t? FleetSerializeOutput<TItem>[]
\t\t\t\t: T extends { toJSON(): infer TJSON }
\t\t\t\t\t? TJSON extends object
\t\t\t\t\t\t? FleetSimplify<
\t\t\t\t\t\t\t\tOmit<FleetSerializeObject<Omit<T, "toJSON">>, keyof TJSON> &
\t\t\t\t\t\t\t\t\tFleetSerializeOutput<TJSON>
\t\t\t\t\t\t\t>
\t\t\t\t\t\t: FleetSerializeOutput<TJSON>
\t\t\t\t\t: T extends object
\t\t\t\t\t\t? FleetSerializeObject<T>
\t\t\t\t\t\t: T;
type FleetProcedureOutput<T> = { toJSON(): FleetSerializeOutput<T> };`;

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
	const sanitizedSourceFile = sanitizeBackendTypes(ts, sourceFile);
	const transformedSourceFile = transformProcedureOutputs(ts, sanitizedSourceFile);
	const statements = transformedSourceFile.statements.filter(
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
		.map(statement => printer.printNode(ts.EmitHint.Unspecified, statement, transformedSourceFile))
		.join("\n")
		.replace(/^(?: {4})+/gm, indentation => "\t".repeat(indentation.length / 4));

	await mkdir(path.dirname(outputPath), { recursive: true });
	await writeFile(
		outputPath,
		`// Generated by \`npx @automateinc/fleet-types generate\`. Do not edit manually.\n${SERIALIZED_OUTPUT_TYPES}\n${appRouterDeclaration}\n`,
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

function transformProcedureOutputs(ts, sourceFile) {
	const procedureTypes = new Set(["TRPCMutationProcedure", "TRPCQueryProcedure", "TRPCSubscriptionProcedure"]);
	const transformation = ts.transform(sourceFile, [
		context => {
			const visit = node => {
				if (
					ts.isImportTypeNode(node) &&
					ts.isIdentifier(node.qualifier) &&
					procedureTypes.has(node.qualifier.text) &&
					node.typeArguments?.length
				) {
					const [procedureDefinition, ...remainingTypeArguments] = node.typeArguments;
					if (ts.isTypeLiteralNode(procedureDefinition)) {
						const members = procedureDefinition.members.map(member => {
							if (
								ts.isPropertySignature(member) &&
								member.type &&
								ts.isIdentifier(member.name) &&
								member.name.text === "output"
							) {
								return ts.factory.updatePropertySignature(
									member,
									member.modifiers,
									member.name,
									member.questionToken,
									ts.factory.createTypeReferenceNode("FleetProcedureOutput", [member.type]),
								);
							}

							return member;
						});
						const updatedDefinition = ts.factory.updateTypeLiteralNode(procedureDefinition, members);

						return ts.factory.updateImportTypeNode(
							node,
							node.argument,
							node.attributes,
							node.qualifier,
							[updatedDefinition, ...remainingTypeArguments],
							node.isTypeOf,
						);
					}
				}

				return ts.visitEachChild(node, visit, context);
			};

			return rootNode => ts.visitNode(rootNode, visit);
		},
	]);
	const transformedSourceFile = transformation.transformed[0];

	transformation.dispose();

	return transformedSourceFile;
}

function sanitizeBackendTypes(ts, sourceFile) {
	const transformation = ts.transform(sourceFile, [
		context => {
			const visit = node => {
				if (ts.isTypeReferenceNode(node)) {
					let typeName = node.typeName;

					while (ts.isQualifiedName(typeName)) typeName = typeName.left;

					if (ts.isIdentifier(typeName) && typeName.text === "PrismaJson") {
						return ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword);
					}
				}

				if (
					ts.isImportTypeNode(node) &&
					ts.isLiteralTypeNode(node.argument) &&
					ts.isStringLiteral(node.argument.literal) &&
					node.argument.literal.text.startsWith("@/")
				) {
					return ts.factory.createKeywordTypeNode(ts.SyntaxKind.UnknownKeyword);
				}

				return ts.visitEachChild(node, visit, context);
			};

			return rootNode => ts.visitNode(rootNode, visit);
		},
	]);
	const transformedSourceFile = transformation.transformed[0];

	transformation.dispose();

	return transformedSourceFile;
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
