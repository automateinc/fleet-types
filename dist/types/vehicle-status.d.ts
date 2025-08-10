export interface IVehicleStatus {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	name: string;

	regionId: string;
	metadata?: any;
}
