export type ConfigScope = "DEFAULT" | "TEAM" | "REGION";

export type ConfigValueType = "STRING" | "NUMBER" | "BOOLEAN" | "DATE" | "DATETIME" | "TIME" | "RELATION" | "JSON";

export type ConfigScalar = string | number | boolean | null;

export type ConfigDocumentValue = ConfigScalar | ConfigDocumentValue[] | ConfigDocument;

export interface ConfigDocument {
	[key: string]: ConfigDocumentValue;
}

export interface IConfig {
	id: string;
	createdAt: string;
	updatedAt?: string;
	name: string;
	metadata?: unknown;
	regionId?: string | null;
	scope: ConfigScope;
	teamId?: string | null;
	type: ConfigScope;
	value: ConfigDocument;
	valueType: "JSON";
}
