import type { ITodoCustomFieldOption } from "./todo-custom-field-option";
import type { TodoCustomFieldType } from "./todo-custom-field-type";
import type { TodoJsonValue } from "./todo-json-value";

export interface ITodoCustomField {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;
	name: string;
	type: TodoCustomFieldType;
	spaceId: string;
	options?: ITodoCustomFieldOption[];
	defaultValue?: TodoJsonValue;
	sortOrder: number;
	required: boolean;
	metadata?: Record<string, unknown>;
}
