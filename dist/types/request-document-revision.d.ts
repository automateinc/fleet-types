export interface IRequestDocumentRevision {
	id: string;
	createdAt: string;
	publishedAt: string | null;
	previewedAt: string | null;

	setupId: string;
	templateId: string;
	templateFileId: string;
	revision: number;
}
