import type { StructuredJson } from "./structured-json";

export interface IStructuredDataVersion {
	calculationVersion: string | null;
	id: string;
	recordId: string;
	employeeId: string | null;
	companyId: string | null;
	data: Record<string, StructuredJson>;
	rawData: StructuredJson;
	deletedAt: string | null;
	revision: number;
	recordedAt: string;
	observedAt: string;
	definitionVersion: number;
	operationKey: string;
}
