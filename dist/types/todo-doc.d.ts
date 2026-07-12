import type { TodoJsonValue } from "./todo-json-value";

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
	version: number;
	contentVersion: number;
	metadata?: Record<string, unknown>;
}
