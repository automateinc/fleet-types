import type { IClientRequestCategoryField } from "./client-request-category-field";

export interface IClientRequestFieldVisibilityRule {
	id: string;
	action: "SHOW" | "HIDE";
	conditionJoin?: "AND" | "OR" | null;
	operator:
		| "EQUALS"
		| "NOT_EQUALS"
		| "CONTAINS"
		| "NOT_CONTAINS"
		| "IS_EMPTY"
		| "IS_NOT_EMPTY"
		| "ANY_OF"
		| "NONE_OF"
		| "ONE_OF"
		| "GREATER_THAN"
		| "GREATER_THAN_EQUALS"
		| "LESS_THAN"
		| "LESS_THAN_EQUALS"
		| "BETWEEN";
	sourceFieldId: string;
	targetFieldId: string;
	order: number;
	compareValueString?: string;
	compareValueNumber?: number;
	compareValueBoolean?: boolean;
	compareValueDate?: string;
	metadata?: any;
	sourceField?: {
		id: string;
		name: string;
		type?: IClientRequestCategoryField["type"];
	};
	targetField?: {
		id: string;
		name: string;
		type?: IClientRequestCategoryField["type"];
	};
}
