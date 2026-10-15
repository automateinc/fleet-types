import type { StructuredJson } from "./structured-json";

export interface IStructuredQuery {
	id: string;
	regionId: string;
	key: string;
	name: string;
	definition: StructuredJson;
	createdAt: string;
	updatedAt: string;
}
