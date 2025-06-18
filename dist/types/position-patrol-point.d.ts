export interface IPositionPatrolPoint {
	id: string;
	createdAt: string;
	updatedAt?: string;

	name: string;
	description?: string;
	order: number;
	type: "CLOSE_ENDED_QUESTION" | "OPEN_ENDED_QUESTION" | "NO_ACTION" | "PHOTO" | "VIDEO";

	patrolId: string;
}
