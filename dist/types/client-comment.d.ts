export interface IClientComment {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	clientId: string;
	siteId?: string;

	userId: string;

	comment: string;

	metadata?: any;
}
