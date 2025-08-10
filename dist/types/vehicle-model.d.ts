export interface IVehicleModel {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	name: string;

	makeId: string;

	regionId: string;
	metadata?: any;
}
