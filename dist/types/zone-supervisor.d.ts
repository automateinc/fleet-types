export interface IZoneSupervisor {
	id: string;
	createdAt: string;
	updatedAt: string;

	zoneId: string;
	userId: string;
	employeeGroupId: string;

	metadata?: any;
}
