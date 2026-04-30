export interface IClientChecklistItem {
	id: string;
	createdAt: string;
	updatedAt?: string | null;

	definitionId: string;
	clientId: string;
	companyId?: string | null;

	done: boolean;
	completedAt?: string | null;
	completedById?: string | null;

	metadata?: any;
}
