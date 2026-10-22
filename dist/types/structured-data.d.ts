import type { StructuredJson } from "./structured-json";

export interface IStructuredData {
	id: string;
	datasetId: string;
	key: string;
	employeeId: string | null;
	companyId: string | null;
	data: Record<string, StructuredJson>;
	rawData: StructuredJson;
	deletedAt: string | null;
	contentHash: string;
	revision: number;
	createdAt: string;
	updatedAt: string;
}
