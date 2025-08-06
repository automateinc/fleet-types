export interface IReportCommentReaction {
	id: string;
	createdAt: Date;
	updatedAt?: Date;
	deletedAt?: Date;

	userId: string;
	commentId: string;
	reaction: string;
	metadata?: any;
}
