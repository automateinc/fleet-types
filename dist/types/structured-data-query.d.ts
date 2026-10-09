import type { StructuredDataFilter } from "./structured-data-filter";
import type { StructuredDataWhere } from "./structured-data-where";

export interface StructuredDataQuery {
	search?: { value: string; fields?: string[]; employee?: boolean };
	where?: StructuredDataWhere;
	filters?: StructuredDataFilter[];
	sort?: { field: string; direction: "asc" | "desc" }[];
	page?: number;
	limit?: number;
	employeeId?: string;
	companyId?: string;
	asOf?: string;
	revision?: number;
}
