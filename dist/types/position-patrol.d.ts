export interface IPositionPatrol {
	id: string;
	createdAt: string;
	updatedAt?: string;

	name: string;
	description?: string;
	flow: "SEQUENTIAL" | "RANDOM";
	frequency: number;

	positionId: string;
}
