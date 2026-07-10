export interface ITodoFolder {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;
	name: string;
	icon?: string;
	color?: string;
	spaceId: string;
	parentId?: string;
	sortOrder: number;
	version: number;
	metadata?: Record<string, unknown>;
}
