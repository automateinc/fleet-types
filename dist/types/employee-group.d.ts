export interface IEmployeeGroup {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	title: string;
	canBeScheduled: boolean;
	payrollDisputeCutoffDays: number;

	regionId: string;
	metadata?: any;
}
