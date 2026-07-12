import type { TodoRecurrenceSettings } from "./todo-recurrence-settings";

export interface ITodo {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;
	version: number;
	title: string;
	description?: string;
	statusId: string;
	listId: string;
	spaceId: string;
	createdById: string;
	closedById?: string;
	startDate?: string;
	dueDate?: string;
	completedAt?: string;
	closedAt?: string;
	sortOrder: number;
	parentId?: string;
	recurringSettings?: TodoRecurrenceSettings;
	metadata?: Record<string, unknown>;
}
