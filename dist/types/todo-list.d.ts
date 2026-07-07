export interface ITodoList {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	icon?: string;
	color?: string;

	spaceId: string;

	sortOrder: number;

	metadata?: any;
}
