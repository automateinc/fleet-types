import { IModel } from "./models";

export interface IRequestCategoryField {
	name: string;
	required: boolean;
	type: "STRING" | "NUMBER" | "BOOLEAN" | "DATE" | "DATETIME" | "TIME" | "UPLOAD" | "RELATION" | "SELECT" | "SIGNATURE";
	model?: IModel;
	config: {
		cardinality?: "SINGLE" | "MULTI";
		multiple?: boolean;
		options: any[];
		optionsUrl: string;
		uploadCategory?: string;
		dependencies?: string[];
		hasDependency?: boolean;
		variant?: string;
	};
	metadata?: any;
}
