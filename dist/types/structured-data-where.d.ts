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
