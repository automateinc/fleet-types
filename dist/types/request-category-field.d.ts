export interface IRequestCategoryField {
	name: string;
	required: boolean;
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
		| "SIGNATURE";
	model?: "contract" | "company" | "contact";
	config: {
		options: any[];
		optionsUrl: string;
		uploadCategory?: string;
		dependencies?: string[];
		hasDependency?: boolean;
		variant?: string;
	};
}
