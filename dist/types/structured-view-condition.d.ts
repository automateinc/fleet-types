export type StructuredViewValue =
	| { literal: string | number | boolean | null }
	| { field: string[] }
	| { parameter: string };

export type StructuredViewCondition =
	| { op: "all" | "any"; conditions: StructuredViewCondition[] }
	| {
			op: "eq" | "ne" | "gt" | "gte" | "lt" | "lte" | "present" | "absent" | "in";
			left: StructuredViewValue;
			right?: StructuredViewValue;
	  };
