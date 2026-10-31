export interface IAssetCategoryField {
	name: string;
	order: number;
	required: boolean;
	type: "STRING" | "NUMBER" | "BOOLEAN" | "DATE" | "DATETIME" | "TIME" | "UPLOAD" | "RELATION" | "SELECT" | "SIGNATURE";
	model?: "contract" | "company" | "contact";
	config: {
		cardinality?: "SINGLE" | "MULTI";
		multiple?: boolean;
		options: any[];
		optionsUrl: string;
		uploadCategory?: string;
		variant?: string;
		dependencies?: any[];
	};
	metadata?: any;
}
