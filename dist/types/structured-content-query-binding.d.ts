import type { StructuredDataFilter } from "./structured-data-filter";
import type { StructuredQueryParameterValue } from "./structured-query-parameter-value";

export interface IStructuredContentQueryBinding {
	id: string;
	contentVersionId: string;
	queryVersionId: string;
	key: string;
	output: string;
	parameters: Record<string, StructuredQueryParameterValue>;
	parameterBindings: Record<string, string> | null;
	filters: StructuredDataFilter[] | null;
}
