export interface IConfig {
	id: string;
	createdAt: string;
	updatedAt?: string;
	name: string;
	value: any;
	type: "DEFAULT" | "TEAM" | "REGION" | "COMPANY";
	teamId?: string;
	regionId?: string;
	companyId?: string;
}
