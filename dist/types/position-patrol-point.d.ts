export interface IPositionPatrolPoint {
	id: string;
	createdAt: string;
	updatedAt?: string;

	name: string;
	description?: string;
	order: number;
	type: "CLOSE_ENDED_QUESTION" | "OPEN_ENDED_QUESTION" | "NO_ACTION" | "PHOTO" | "VIDEO";
	reportNotesTrigger?: string;

	patrolId: string;
	nfcTagId?: string;
	reportTypeId?: string;
	reportCategoryId?: string;
	metadata?: any;
}
