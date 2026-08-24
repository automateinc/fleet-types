import type { IClientRequestCategoryField } from "./client-request-category-field";

export interface IClientRequestFieldVisibilityRule {
	id: string;
	action: "SHOW" | "HIDE";
	operator: "EQUALS" | "NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS" | "IS_EMPTY" | "IS_NOT_EMPTY";
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
