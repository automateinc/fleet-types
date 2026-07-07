export interface ITodoStatus {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	color: string;
	type: TodoStatusType;

	spaceId: string;

	sortOrder: number;
	isDefault: boolean;

	metadata?: any;
}

export type TodoStatusType = "OPEN" | "IN_PROGRESS" | "DONE" | "CLOSED" | "CUSTOM";
