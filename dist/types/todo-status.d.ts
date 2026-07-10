export interface ITodoStatus {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	color: string;
	type: TodoStatusType;

	listId: string;

	sortOrder: number;
	isDefault: boolean;
	isCompletedStatus: boolean;

	metadata?: Record<string, unknown>;
}

export type TodoStatusType = "OPEN" | "IN_PROGRESS" | "DONE" | "CLOSED" | "CUSTOM";
