export interface IRestriction {
	createdAt: string;
	updatedAt: string;
	id: string;

	label: string;
	type: "EMPLOYEE" | "CONTRACT" | "ROLE" | "COMPANY";
	operation: "EQUALS" | "NOT_EQUALS" | "CONTAINS" | "NOT_CONTAINS" | "EXISTS" | "NOT_EXISTS";
	category?: string;
	valueA: string;
	valueB?: string;

	requestCategoryId?: string;
}
