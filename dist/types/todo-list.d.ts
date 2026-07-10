export interface ITodoList {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	icon?: string;
	color?: string;

	spaceId: string;
	folderId?: string;

	sortOrder: number;

	metadata?: Record<string, unknown>;
}
