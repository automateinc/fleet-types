import type { StructuredJson } from "./structured-json";

export interface IStructuredDataVersion {
	id: string;
	recordId: string;
	employeeId: string | null;
	companyId: string | null;
	data: Record<string, StructuredJson>;
	rawData: StructuredJson;
	deletedAt: string | null;
	revision: number;
	createdAt: string;
	observedAt: string;
}
