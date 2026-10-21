import type { StructuredJson } from "./structured-json";

export type StructuredQueryOperation =
	| "now"
	| "recordKey"
	| "eq"
	| "ne"
	| "gt"
	| "gte"
	| "lt"
	| "lte"
	| "and"
	| "or"
	| "not"
	| "if"
	| "coalesce"
	| "add"
	| "subtract"
	| "multiply"
	| "divide"
	| "trim"
	| "split"
	| "type"
	| "upper"
	| "lower"
	| "text"
	| "number"
	| "date"
	| "parseDate"
	| "formatDate"
	| "epochDate"
	| "epochTime"
	| "timestamp"
	| "localDate"
	| "dateDifference"
	| "dateAdd"
	| "dateRange"
	| "dayOfWeek"
	| "floor"
	| "round"
	| "padStart"
	| "slice"
	| "matches"
	| "contains"
	| "concat"
	| "join"
	| "array"
	| "at"
	| "unique"
	| "count"
	| "first"
	| "last"
	| "sum"
	| "intervalLength"
	| "min"
	| "max"
	| "map"
	| "filter"
	| "any"
	| "all"
	| "isNull"
	| "hasKey"
	| "stripNulls";
export type StructuredQueryExpression =
	| { literal: StructuredJson }
	| { field: string[]; scope?: "row" | "match" | "item" }
	| { parameter: string }
	| { op: StructuredQueryOperation; args: StructuredQueryExpression[] };
export type StructuredQuerySort = { direction: "asc" | "desc"; value: StructuredQueryExpression };
export type StructuredQueryStep = { name: string } & (
	| { type: "system"; source: string; fields: string[] }
	| { type: "values"; rows: Record<string, StructuredJson>[] }
	| {
			type: "dataset" | "datasetInfo";
			datasetKey: string;
			value: "data" | "rawData" | "record";
			companyParameter?: string;
			employeeParameter?: string;
	  }
	| {
			type: "employees";
			employeeParameter?: string;
			companyParameter?: string;
			groupParameter?: string;
			statusParameters?: string[];
	  }
	| { type: "companies"; companyParameter?: string }
	| { type: "derive" | "select"; from: string; values: Record<string, StructuredQueryExpression> }
	| { type: "filter"; from: string; where: StructuredQueryExpression }
	| {
			type: "expand";
			from: string;
			as: string;
			value: StructuredQueryExpression;
			mode: "array" | "object";
			retainParent: boolean;
	  }
	| {
			type: "lookup";
			from: string;
			source: string;
			as: string;
			limit?: number;
			on?: StructuredQueryExpression;
			relation?: "employeeId" | "companyId";
			relations?: ("employeeId" | "companyId")[];
			sort: StructuredQuerySort[];
	  }
	| { type: "union"; sources: string[] }
	| {
			type: "group";
			from: string;
			by: Record<string, StructuredQueryExpression>;
			relations?: ("employeeId" | "companyId")[];
			metrics: Record<
				string,
				{ op: "count" | "countDistinct" | "sum" | "min" | "max" | "collect"; value?: StructuredQueryExpression }
			>;
	  }
);
/** The normalized definition stored by the query model after API validation. */
export type StructuredQueryDefinition = {
	version: 1;
	parameters: Record<
		string,
		"string" | "number" | "boolean" | "date" | "company" | "employee" | "employeeGroup" | "employeeStatus" | "array"
	>;
	steps: StructuredQueryStep[];
	outputs: Record<string, { from: string; name?: string; sort: StructuredQuerySort[] }>;
};
