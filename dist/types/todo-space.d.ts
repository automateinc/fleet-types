export interface ITodoSpace {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	icon?: string;
	color?: string;

	regionId: string;

	sortOrder: number;

	metadata?: any;
}

export interface ITodoSpaceMember {
	id: string;
	createdAt: string;
	updatedAt?: string;

	spaceId: string;
	userId: string;

	role: TodoSpaceMemberRole;

	metadata?: any;
}

export type TodoSpaceMemberRole = "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";

export interface ITodoListMember {
	id: string;
	createdAt: string;
	updatedAt?: string;

	listId: string;
	userId: string;

	role: TodoSpaceMemberRole;

	metadata?: any;
}
