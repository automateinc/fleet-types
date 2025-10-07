export interface IEmployeeGroup {
	id: string;
	createdAt: string;
	updatedAt?: string;

	title: string;
	nationalities: string[];

	regionId: string;
	metadata?: any;
}
