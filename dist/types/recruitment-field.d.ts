export interface IRecruitmentField {
	id: string;
	createdAt: string;
	updatedAt?: string | null;
	categoryId: string;
	name: string;
	order: number;
	type:
		| "STRING"
		| "NUMBER"
		| "BOOLEAN"
		| "DATE"
		| "DATETIME"
		| "TIME"
		| "UPLOAD"
		| "SIGNATURE"
		| "RELATION"
		| "SELECT"
		| "JSON"
		| "EMPTY";
	cardinality: "SINGLE" | "MULTI";
	required: boolean;
	removedAt?: string | null;
	hidden: boolean;
	config?: Record<string, unknown> | null;
}
