export interface IStructuredContent {
	id: string;
	createdAt: string;
	updatedAt: string | null;
	key: string;
	regionId: string | null;
	disabledAt: string | null;
	publishedVersionId: string | null;
	previousUrls: string[];
}
