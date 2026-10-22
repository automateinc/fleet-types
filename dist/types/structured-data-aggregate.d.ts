import type { StructuredDataQuery } from "./structured-data-query";

export interface StructuredAggregateMetric {
	key: string;
	op: "count" | "countDistinct" | "sum" | "avg" | "min" | "max";
	field?: string;
	where?: StructuredDataQuery["where"];
}

export interface StructuredAggregateRequest {
	preAggregate?: { groupBy: string[]; metrics: StructuredAggregateMetric[] }[];
	query: StructuredDataQuery;
	page?: number;
	limit?: number;
	includeEmployee?: boolean;
	sort?: { key: string; direction: "asc" | "desc" }[];
	groupBy?: string | string[];
	metrics: StructuredAggregateMetric[];
}
