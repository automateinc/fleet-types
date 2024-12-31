export interface IConfig {
	id: string;
	createdAt: string;
	updatedAt?: string;
	name: string;
	value: any;
	type: "DEFAULT" | "TEAM" | "REGION" | "COMPANY";
	valueType: "STRING" | "NUMBER" | "BOOLEAN" | "DATE" | "DATETIME" | "TIME" | "JSON";
	teamId?: string;
	regionId?: string;
	companyId?: string;
}
