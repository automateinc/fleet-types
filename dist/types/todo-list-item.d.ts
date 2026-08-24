export interface ITodoListItem {
	id: string;
	createdAt: string;
	todoId: string;
	listId: string;
	addedById: string;
	sortOrder: number;
}
