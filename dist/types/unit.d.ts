export interface IUnit {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	buildingId: string;
	status: "ACTIVE" | "INACTIVE";
}
