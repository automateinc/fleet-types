export interface IStructuredDataField {
	id: string;
	datasetId: string;
	key: string;
	name: string;
	path: string[];
	type: "STRING" | "NUMBER" | "BOOLEAN" | "DATE" | "DATETIME" | "OBJECT" | "ARRAY";
	nullable: boolean;
	filterable: boolean;
	sortable: boolean;
}
