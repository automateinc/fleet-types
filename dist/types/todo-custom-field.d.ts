import type { ITodoCustomFieldOption } from "./todo-custom-field-option";
import type { TodoCustomFieldType } from "./todo-custom-field-type";
import type { TodoJsonValue } from "./todo-json-value";
import type { TodoPeopleFieldOptions } from "./todo-people-field-options";

export interface ITodoCustomField {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;
	name: string;
	type: TodoCustomFieldType;
	spaceId: string;
	options?: ITodoCustomFieldOption[] | TodoPeopleFieldOptions;
	defaultValue?: TodoJsonValue;
	sortOrder: number;
	required: boolean;
	version: number;
	metadata?: Record<string, unknown>;
}
