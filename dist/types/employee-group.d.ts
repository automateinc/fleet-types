export interface IEmployeeGroup {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	title: string;
	canBeScheduled: boolean;

	regionId: string;
	metadata?: any;
}
