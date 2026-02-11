export interface IClientCommentReaction {
	id: string;
	createdAt: string;
  updatedAt: string;
  deletedAt?: string;

  commentId: string;

  userId: string;

  metadata?: any;
}
