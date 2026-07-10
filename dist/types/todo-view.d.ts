import type { TodoJsonValue } from "./todo-json-value";
import type { TodoViewType } from "./todo-view-type";

export interface ITodoView {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;
	name: string;
	type: TodoViewType;
	spaceId: string;
	listId?: string;
	createdById: string;
	isShared: boolean;
	isDefault: boolean;
	filters?: TodoJsonValue;
	sortConfig?: TodoJsonValue;
	groupBy?: string;
	columnConfig?: TodoJsonValue;
	viewConfig?: TodoJsonValue;
	sortOrder: number;
	metadata?: Record<string, unknown>;
}
