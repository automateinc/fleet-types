export interface IVehicle {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	makeId: string;
	modelId: string;
	purchaseDate?: string;
	year: number;
	color: string;
	plateNumber: string;
	vehicleIdentificationNumber: string;
	type: string;

	companyId: string;
	employeeId?: string;
	userId?: string;

	regionId: string;

	assignment: "EMPLOYEE" | "USER" | "POSITION" | "UNASSIGNED";
}
