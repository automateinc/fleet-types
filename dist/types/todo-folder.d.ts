import type { TodoJsonValue } from "./todo-json";

export interface ITodoFolder {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	icon?: string;
	color?: string;

	spaceId: string;
	parentId?: string;

	sortOrder: number;

	metadata?: Record<string, unknown>;
}

export interface ITodoDoc {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	title: string;
	content?: TodoJsonValue;

	spaceId: string;
	folderId?: string;

	createdById: string;

	sortOrder: number;

	metadata?: Record<string, unknown>;
}

export interface ITodoChecklist {
	id: string;
	createdAt: string;
	updatedAt?: string;

	name: string;

	todoId: string;

	sortOrder: number;

	metadata?: Record<string, unknown>;
}

export interface ITodoChecklistItem {
	id: string;
	createdAt: string;
	updatedAt?: string;

	text: string;
	isChecked: boolean;

	checklistId: string;

	sortOrder: number;

	metadata?: Record<string, unknown>;
}
