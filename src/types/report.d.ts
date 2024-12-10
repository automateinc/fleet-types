export interface IReport {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	title: string;
	content: string;

	typeId: string;
	categoryId: string;

	createdByUserId?: string;
	createdByEmployeeId?: string;

	userId?: string;
	employeeId?: string;
	vehicleId?: string;
	clientId?: string;
	siteId?: string;
	zoneId?: string;
	buildingId?: string;
}
