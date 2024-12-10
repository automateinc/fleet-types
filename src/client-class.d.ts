export interface IClientClass {
	id: string;
	name: string;
	type: "CLIENT" | "SITE";
	description?: string;
	regionId: string;
	createdAt: string;
	updatedAt: string;
}
