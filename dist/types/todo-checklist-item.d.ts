export interface ITodoChecklistItem {
	id: string;
	createdAt: string;
	updatedAt?: string;
	text: string;
	isChecked: boolean;
	checklistId: string;
	sortOrder: number;
	version: number;
	metadata?: Record<string, unknown>;
}
