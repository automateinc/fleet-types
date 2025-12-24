export interface IEmployeeGroup {
	id: string;
	createdAt: string;
	updatedAt?: string;

	title: string;

	regionId: string;
	metadata?: any;
}
