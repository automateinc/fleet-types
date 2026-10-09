export type StructuredJson = null | boolean | number | string | StructuredJson[] | { [key: string]: StructuredJson };
export interface IStructuredDataset {
	kind: "SOURCE" | "CALCULATED";
	id: string;
	regionId: string;
	key: string;
	name: string;
	definitionVersion: number;
	revision: number;
	createdAt: string;
	updatedAt: string;
	lastObservedAt: string | null;
	committedAt: string | null;
}
export interface IStructuredDataField {
	id: string;
	datasetId: string;
	key: string;
	path: string[];
	type: "STRING" | "NUMBER" | "BOOLEAN" | "DATE" | "DATETIME" | "OBJECT" | "ARRAY";
	nullable: boolean;
	filterable: boolean;
	sortable: boolean;
}
export interface IStructuredData {
	calculationVersion: string | null;
	id: string;
	datasetId: string;
	key: string;
	employeeId: string | null;
	companyId: string | null;
	data: Record<string, StructuredJson>;
	rawData: StructuredJson;
	deletedAt: string | null;
	revision: number;
	createdAt: string;
	updatedAt: string;
}
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
export interface StructuredDataFilter {
	field: string;
	op: "eq" | "in" | "gt" | "gte" | "lt" | "lte" | "contains" | "isNull" | "missing";
	value?: StructuredJson;
}
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

export type StructuredDataWhere =
	| {
			op: "AND" | "OR";
			conditions: StructuredDataWhere[];
	  }
	| {
			key: string;
			op:
				| "="
				| "!="
				| "contains"
				| "not_contains"
				| "starts_with"
				| "ends_with"
				| ">"
				| ">="
				| "<"
				| "<="
				| "exists"
				| "not_exists";
			value: string;
			valueField?: string;
			ci?: boolean;
	  };
