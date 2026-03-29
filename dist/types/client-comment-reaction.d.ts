export interface IClientCommentReaction {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	commentId: string;

	userId: string;

	reaction: string;

	metadata?: any;
}
