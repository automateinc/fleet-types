import type { StructuredQueryParameterValue } from "./structured-query-parameter-value";

export interface StructuredViewAction {
	modal?: string;
	parameterFields?: Record<string, string>;
	parameters?: Record<string, StructuredQueryParameterValue | null>;
	tab?: { id: string; key: string };
}
