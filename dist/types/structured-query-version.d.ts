import type { StructuredQueryDefinition } from "./structured-query-definition";

export type StructuredQueryVersionStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export interface IStructuredQueryVersion {
	id: string;
	queryId: string;
	version: number;
	status: StructuredQueryVersionStatus;
	name: string;
	definition: StructuredQueryDefinition;
	createdAt: string;
	updatedAt: string;
}
