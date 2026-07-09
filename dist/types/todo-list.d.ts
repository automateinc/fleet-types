export interface ITodoList {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	icon?: string;
	color?: string;

	spaceId: string;
	folderId?: string;

	sortOrder: number;

	fieldConfig?: ITodoListFieldConfig;

	metadata?: any;
}

import { ITodoListFieldConfig } from "./todo-list-field-config";
