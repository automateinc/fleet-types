export interface IStructuredDataset {
	id: string;
	regionId: string;
	key: string;
	name: string;
	revision: number;
	createdAt: string;
	updatedAt: string;
	lastObservedAt: string | null;
	committedAt: string | null;
}
