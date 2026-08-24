export interface ITodoComment {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;
	version: number;
	body: string;
	todoId: string;
	userId: string;
	parentId?: string;
	metadata?: Record<string, unknown>;
}
