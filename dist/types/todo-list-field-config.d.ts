import type { ITodoListFieldEntry } from "./todo-list-field-entry";

export interface ITodoListFieldConfig {
	id: string;
	createdAt: string;
	updatedAt?: string;
	listId: string;
	fields: ITodoListFieldEntry[];
}
