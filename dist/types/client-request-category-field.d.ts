import { IModel } from "./models";

export interface IClientRequestCategoryField {
	id: string;
	createdAt: string;
	updatedAt: string;

	categoryId: string;

	required: boolean;

	name: string;

	valueType:
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
}
