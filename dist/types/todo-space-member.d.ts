import type { TodoSpaceMemberRole } from "./todo-space-member-role";

export interface ITodoSpaceMember {
	id: string;
	createdAt: string;
	updatedAt?: string;
	spaceId: string;
	userId: string;
	role: TodoSpaceMemberRole;
	metadata?: Record<string, unknown>;
}
