export type IPayrollConfig = {
	id: string;
	createdAt: string;
	updatedAt?: string;

	payrollDisputeCutoffDays: number;
	value: any;

	type: "DRAFT" | "PUBLISHED";

	employeeGroupId: string;
	currentVersionId?: string | null;

	metadata?: any;
};

export interface IPayrollConfigVersion {
	id: string;
	createdAt: string;
	version: number;
	payrollDisputeCutoffDays: number;
	configId: string;
	publishedById: string | null;
	value: IPayrollConfig["value"];
}
