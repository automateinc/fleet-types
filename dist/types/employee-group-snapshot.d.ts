export interface IEmployeeGroupSnapshot {
	id: string;
	createdAt: string;
	updatedAt?: string;

	employeeGroupId: string;
	title: string;
	regionId: string;

	metadata?: any;
}