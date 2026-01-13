export interface ICluster {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	regionId: string;

	metadata?: any;
}
