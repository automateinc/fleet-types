export type IPayrollConfig = {
	id: string;
	createdAt: string;
	updatedAt?: string;

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
	configId: string;
	publishedById: string | null;
	value: IPayrollConfig["value"];
}
