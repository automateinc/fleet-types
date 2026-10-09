export interface IStructuredDataset {
	kind: "SOURCE" | "CALCULATED";
	id: string;
	regionId: string;
	key: string;
	name: string;
	definitionVersion: number;
	revision: number;
	createdAt: string;
	updatedAt: string;
	lastObservedAt: string | null;
	committedAt: string | null;
}
