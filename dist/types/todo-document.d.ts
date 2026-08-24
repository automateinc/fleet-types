export interface ITodoDocument {
	id: string;
	createdAt: string;

	todoId: string;
	fileId: string;

	addedById: string;

	metadata?: Record<string, unknown>;
}
