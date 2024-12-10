export interface IVehicleRegistration {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	vehicleId: string;

	amount: number;

	issueDate: string;
	expiryDate: string;

	active: boolean;
}
