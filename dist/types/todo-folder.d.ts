export interface ITodoFolder {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	icon?: string;
	color?: string;

	spaceId: string;

	sortOrder: number;

	metadata?: any;
}

export interface ITodoDoc {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	title: string;
	content?: any;

	spaceId: string;
	folderId?: string;

	createdById: string;

	sortOrder: number;

	metadata?: any;
}

export interface ITodoChecklist {
	id: string;
	createdAt: string;
	updatedAt?: string;

	name: string;

	todoId: string;

	sortOrder: number;

	items?: ITodoChecklistItem[];

	metadata?: any;
}

export interface ITodoChecklistItem {
	id: string;
	createdAt: string;
	updatedAt?: string;

	text: string;
	isChecked: boolean;

	checklistId: string;

	sortOrder: number;

	metadata?: any;
}
