export interface IVehicleContract {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	vehicleId: string;

	startDate: string;
	endDate: string;

	status: "ACTIVE" | "INACTIVE";

	vendorId: string;

	active: boolean;
}
