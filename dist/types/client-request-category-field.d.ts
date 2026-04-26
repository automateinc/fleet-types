import { IModel } from "./models";

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

export interface IClientRequestCategoryField {
	id: string;
	createdAt: string;
	updatedAt: string;

	categoryId: string;

	required: boolean;
	order: number;

	name: string;
	cardinality: "SINGLE" | "MULTI";

	type:
		| "STRING"
		| "NUMBER"
		| "BOOLEAN"
		| "DATE"
		| "DATETIME"
		| "TIME"
		| "UPLOAD"
		| "RELATION"
		| "SINGLE_SELECT"
		| "RELATION";

	metadata?: any;

	config: {
		model?: IModel;
		options?: any[];
		optionsUrl?: string;
		uploadCategory?: string;
		dependencies?: string[];
		hasDependency?: boolean;
		variant?: string;
	};

	visibilityRulesAsSource?: IClientRequestFieldVisibilityRule[];
	visibilityRulesAsTarget?: IClientRequestFieldVisibilityRule[];
}
