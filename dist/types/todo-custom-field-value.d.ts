import type { TodoJsonValue } from "./todo-json-value";

export interface ITodoCustomFieldValue {
	id: string;
	createdAt: string;
	updatedAt?: string;
	todoId: string;
	fieldId: string;
	value: TodoJsonValue;
	metadata?: Record<string, unknown>;
}
