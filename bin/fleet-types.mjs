#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { mkdir, mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { tmpdir } from "node:os";
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
	const prismaTypesPath = path.join(apiRoot, "prisma/types.d.ts");
	const executableExtension = process.platform === "win32" ? ".cmd" : "";
	const apiTscPath = path.join(apiRoot, `node_modules/.bin/tsc${executableExtension}`);
	const biomePath = path.join(packageRoot, `node_modules/.bin/biome${executableExtension}`);
	const temporaryDirectory = await mkdtemp(path.join(tmpdir(), "fleet-trpc-types-"));
	const declarationOutputDirectory = path.join(temporaryDirectory, "declarations");
	const declarationTsconfigPath = path.join(temporaryDirectory, "tsconfig.json");
	const prismaJsonShimPath = path.join(temporaryDirectory, "prisma-json.d.ts");
	const serviceProviderShimPath = path.join(temporaryDirectory, "service-provider.d.ts");
	const requireFromPackage = createRequire(path.join(packageRoot, "package.json"));
	const ts = requireFromPackage("typescript");

	try {
		const prismaTypesContent = await readFile(prismaTypesPath, "utf8");
		const prismaTypesSource = ts.createSourceFile(prismaTypesPath, prismaTypesContent, ts.ScriptTarget.Latest, true);
		let coordsType;
		const findCoordsType = node => {
			if (ts.isModuleDeclaration(node) && ts.isIdentifier(node.name) && node.name.text === "PrismaJson") {
				const body = node.body;
				if (body && ts.isModuleBlock(body)) {
					coordsType = body.statements.find(
						statement => ts.isTypeAliasDeclaration(statement) && statement.name.text === "Coords",
					);
				}
			}
			ts.forEachChild(node, findCoordsType);
		};
		findCoordsType(prismaTypesSource);
		if (!coordsType) {
			throw new Error(`PrismaJson.Coords was not found in ${prismaTypesPath}.`);
		}
		const coordsTypeDeclaration = ts
			.createPrinter({ newLine: ts.NewLineKind.LineFeed })
			.printNode(ts.EmitHint.Unspecified, coordsType, prismaTypesSource);

		await writeFile(
			prismaJsonShimPath,
			`export {};\ndeclare global { namespace PrismaJson { ${coordsTypeDeclaration} } }\n`,
		);
		await writeFile(
			serviceProviderShimPath,
			"export declare class ServiceProvider { static getAuthenticationService(): { login(email: string, password: string, tokenExpiry?: string): Promise<string> }; static getEncryptionService(): { decodeId(encodedId: string, prefix: string): number }; }\n",
		);
		await writeFile(
			declarationTsconfigPath,
			`${JSON.stringify(
				{
					compilerOptions: {
						declaration: true,
						declarationMap: false,
						emitDeclarationOnly: true,
						incremental: true,
						noEmit: false,
						outDir: declarationOutputDirectory,
						paths: {
							"@/*": [path.join(apiRoot, "src/*")],
							"@/providers": [serviceProviderShimPath],
							"@/providers/service.provider": [serviceProviderShimPath],
						},
						tsBuildInfoFile: path.join(temporaryDirectory, "tsconfig.tsbuildinfo"),
						typeRoots: [path.join(apiRoot, "node_modules/@types")],
					},
					extends: path.join(apiRoot, "tsconfig.json"),
					files: [routerSourcePath, prismaJsonShimPath],
				},
				null,
				2,
			)}\n`,
		);

		const typeScriptResult = spawnSync(apiTscPath, ["--project", declarationTsconfigPath, "--pretty"], {
			cwd: apiRoot,
			stdio: "inherit",
		});

		if (typeScriptResult.error) {
			throw typeScriptResult.error;
		}
		if (typeScriptResult.status !== 0) {
			throw new Error(`TypeScript declaration generation failed with exit code ${typeScriptResult.status}.`);
		}

		const emittedPath = path
			.join(declarationOutputDirectory, path.relative(path.join(apiRoot, "src"), routerSourcePath))
			.replace(/\.ts$/, ".d.ts");
		const emittedDeclaration = await readFile(emittedPath, "utf8");
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
	} finally {
		await rm(temporaryDirectory, { force: true, recursive: true });
	}
}

function printUsage() {
	console.log(`Usage: npx @automateinc/fleet-types generate

Commands:
  generate  Generate AppRouter types from Fleet API

Environment variables:
  FLEET_API_PATH        Fleet API path relative to the current directory
  FLEET_API_TYPES_PATH  Generated declaration path relative to the current directory`);
}
