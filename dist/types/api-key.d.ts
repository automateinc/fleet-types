export interface IApiKey {
	id: string;
	createdAt: string;
	updatedAt: string;

	key: string;

	userId: string;

	metadata?: any;
}
