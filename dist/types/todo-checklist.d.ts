export interface ITodoChecklist {
	id: string;
	createdAt: string;
	updatedAt?: string;
	name: string;
	todoId: string;
	sortOrder: number;
	version: number;
	metadata?: Record<string, unknown>;
}
