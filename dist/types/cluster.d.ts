export interface ICluster {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	primaryKey?: string;
	regionId: string;

	metadata?: any;
}
