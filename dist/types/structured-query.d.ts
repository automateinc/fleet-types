import type { StructuredQueryDefinition } from "./structured-query-definition";

export interface IStructuredQuery {
	id: string;
	regionId: string;
	key: string;
	name: string;
	definition: StructuredQueryDefinition;
	createdAt: string;
	updatedAt: string;
}
