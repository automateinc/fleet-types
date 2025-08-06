export interface IEmployeeCommentReaction {
	id: string;
	createdAt: Date;
	updatedAt?: Date;
	deletedAt?: Date;

	userId: string;
	commentId: string;
	reaction: string;
	metadata?: any;
}
