import type { TodoJsonObject } from "./todo-json-object";

export interface ITodoDashboard {
	id: string;
	createdAt: string;
	updatedAt?: string;
	spaceId: string;
	listId?: string;
	config: TodoJsonObject;
}
