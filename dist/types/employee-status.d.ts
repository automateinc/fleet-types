export interface IEmployeeStatus {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	default: boolean;
	weight: number;
	regionId: string;
	metadata?: any;
}
