export interface IBuildingLease {
	id: string;
	createdAt: string;
	updatedAt: string;

	buildingId: string;

	startDate: string;
	endDate: string;

	status: "ACTIVE" | "INACTIVE";
}
