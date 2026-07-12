import type { TodoSpaceVisibility } from "./todo-space-visibility";

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
	version: number;
	metadata?: Record<string, unknown>;
}
