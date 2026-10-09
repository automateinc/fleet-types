import type { StructuredJson } from "./structured-json";

export interface StructuredDataFilter {
	field: string;
	op: "eq" | "in" | "gt" | "gte" | "lt" | "lte" | "contains" | "isNull" | "missing";
	value?: StructuredJson;
}
