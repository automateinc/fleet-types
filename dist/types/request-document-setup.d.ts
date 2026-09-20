export interface IRequestDocumentSetup {
	id: string;
	updatedAt: string;

	categoryId: string;
	draftId: string | null;
	publishedId: string | null;

	enabled: boolean;
	revision: number;
}
