import type { StructuredAggregateMetric } from "./structured-data-aggregate";
import type { StructuredDataFilter } from "./structured-data-filter";
import type { StructuredDataWhere } from "./structured-data-where";
import type { StructuredQueryParameterValue } from "./structured-query-parameter-value";

export interface StructuredQueryInput {
	aggregate?: {
		groupBy: string[];
		metrics: StructuredAggregateMetric[];
	};
	where?: StructuredDataWhere;
	output: string;
	parameters: Record<string, StructuredQueryParameterValue>;
	page: number;
	limit: number;
	filters?: StructuredDataFilter[];
	search?: { value: string; fields: string[] };
	sort?: { field: string; direction: "asc" | "desc" }[];
}
