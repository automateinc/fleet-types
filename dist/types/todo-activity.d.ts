import type { TodoJsonObject } from "./todo-json-object";

export interface ITodoActivity {
	id: string;
	createdAt: string;

	todoId: string;
	userId: string;

	action: TodoActivityAction;

	changes?: TodoJsonObject;

	metadata?: Record<string, unknown>;
}

export type TodoActivityAction =
	| "CREATED"
	| "UPDATED"
	| "STATUS_CHANGED"
	| "PRIORITY_CHANGED"
	| "ASSIGNED"
	| "UNASSIGNED"
	| "COMMENTED"
	| "DOCUMENT_ADDED"
	| "DOCUMENT_REMOVED"
	| "DEPENDENCY_ADDED"
	| "DEPENDENCY_REMOVED"
	| "TAG_ADDED"
	| "TAG_REMOVED"
	| "WATCHING"
	| "UNWATCHING"
	| "MOVED"
	| "ARCHIVED"
	| "RESTORED";
