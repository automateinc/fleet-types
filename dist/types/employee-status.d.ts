export interface IEmployeeStatus {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	default: boolean;
	employeeActive: boolean;
	weight: number;
	regionId: string;
	metadata?: any;
}
