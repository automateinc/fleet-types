export interface ITodoComment {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	body: string;

	todoId: string;
	userId: string;

	parentId?: string;

	metadata?: any;
}

export interface ITodoCommentReaction {
	id: string;
	createdAt: string;

	commentId: string;
	userId: string;

	emoji: string;
}
