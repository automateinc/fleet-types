export interface ITodoSpace {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	icon?: string;
	color?: string;

	regionId: string;
	visibility: TodoSpaceVisibility;

	sortOrder: number;

	metadata?: Record<string, unknown>;
}

export interface ITodoSpaceMember {
	id: string;
	createdAt: string;
	updatedAt?: string;

	spaceId: string;
	userId: string;

	role: TodoSpaceMemberRole;

	metadata?: Record<string, unknown>;
}

export type TodoSpaceMemberRole = "OWNER" | "ADMIN" | "EDITOR" | "VIEWER";
export type TodoSpaceVisibility = "PUBLIC" | "PRIVATE";

export interface ITodoListMember {
	id: string;
	createdAt: string;
	updatedAt?: string;

	listId: string;
	userId: string;

	role: TodoSpaceMemberRole;

	metadata?: Record<string, unknown>;
}
