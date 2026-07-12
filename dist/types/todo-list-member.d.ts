import type { TodoSpaceMemberRole } from "./todo-space-member-role";

export interface ITodoListMember {
	id: string;
	createdAt: string;
	updatedAt?: string;
	listId: string;
	userId: string;
	role: TodoSpaceMemberRole;
	metadata?: Record<string, unknown>;
}
