import type { TodoPriority } from "./todo-priority";
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
	priority: TodoPriority;
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
	estimatedHours?: number;
	sprintPoints?: number;
	timeEstimate?: number;
	recurringSettings?: TodoRecurrenceSettings;
	taskType?: string;
	metadata?: Record<string, unknown>;
}
