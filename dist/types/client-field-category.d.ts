export interface IClientFieldCategory {
	id: string;
	createdAt: string;
	updatedAt?: string;

	regionId: string;

	name: string;
	order: number;

	metadata?: any;
}
