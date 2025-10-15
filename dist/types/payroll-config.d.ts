export type IPayrollConfig = {
	id: string;
	createdAt: string;
	updatedAt?: string;

	value: any;

	type: "DRAFT" | "PUBLISHED";

	employeeGroupId: string;

	metadata?: any;
};
