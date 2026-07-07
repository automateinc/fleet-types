export interface ITodo {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	title: string;
	description?: string;

	statusId: string;
	priority: TodoPriority;

	listId: string;
	spaceId: string;

	createdById: string;

	startDate?: string;
	dueDate?: string;
	completedAt?: string;

	sortOrder: number;

	parentId?: string;

	estimatedHours?: number;

	metadata?: any;
}

export interface ITodoAssignee {
	id: string;
	createdAt: string;

	todoId: string;
	userId?: string;
	employeeId?: string;

	metadata?: any;
}

export interface ITodoWatcher {
	id: string;
	createdAt: string;

	todoId: string;
	userId: string;
}

export interface ITodoDependency {
	id: string;
	createdAt: string;

	todoId: string;
	dependsOnId: string;

	type: TodoDependencyType;

	createdById: string;
}

export interface ITodoCustomFieldValue {
	id: string;
	createdAt: string;
	updatedAt?: string;

	todoId: string;
	fieldId: string;

	value: any;

	metadata?: any;
}

export interface ITodoListItem {
	id: string;
	createdAt: string;

	todoId: string;
	listId: string;

	addedById: string;

	sortOrder: number;
}

export interface ITodoTagAssignment {
	id: string;
	createdAt: string;

	todoId: string;
	tagId: string;
}

export type TodoPriority = "URGENT" | "HIGH" | "NORMAL" | "LOW";

export type TodoDependencyType = "FINISH_TO_START" | "START_TO_START" | "FINISH_TO_FINISH" | "START_TO_FINISH";
