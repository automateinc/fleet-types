export interface IStructuredDataset {
	id: string;
	regionId: string;
	key: string;
	name: string;
	revision: number;
	createdAt: string;
	updatedAt: string;
	lastObservedAt: string | null;
	lastOperationKey: string | null;
	lastOperationHash: string | null;
	committedAt: string | null;
}
