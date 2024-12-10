export interface IBuildingContact {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	number: string;
	email?: string;
	notes?: string;
	buildingId: string;
}
