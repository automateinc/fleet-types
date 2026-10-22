import type { StructuredDataFilter } from "./structured-data-filter";
import type { StructuredQueryParameterValue } from "./structured-query-parameter-value";

export interface StructuredDatasetBinding {
	filterBindings?: { field: string; op: "eq" | "gt" | "gte" | "lt" | "lte" | "contains" | "in"; parameter: string }[];
	datasetKey: string;
	filters: StructuredDataFilter[];
}

export interface StructuredQueryBinding {
	parameterBindings?: Record<string, string>;
	filters?: StructuredDataFilter[];
	queryKey: string;
	output: string;
	parameters: Record<string, StructuredQueryParameterValue>;
}

export type StructuredViewBinding = StructuredDatasetBinding | StructuredQueryBinding;
