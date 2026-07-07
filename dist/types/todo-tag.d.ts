export interface ITodoTag {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	color: string;

	spaceId: string;

	metadata?: any;
}
