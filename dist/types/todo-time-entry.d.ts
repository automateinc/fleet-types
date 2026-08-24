export interface ITodoTimeEntry {
	id: string;
	createdAt: string;
	updatedAt?: string;
	todoId: string;
	userId: string;
	startedAt: string;
	stoppedAt?: string;
	duration?: number;
	description?: string;
	metadata?: Record<string, unknown>;
}
