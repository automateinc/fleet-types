export interface ICompanyDocumentTemplate {
	id: string;
	createdAt: string;
	updatedAt: string;

	companyId: string;
	categoryId: string;
	templateId: string | null;

	previewedAt: string | null;
	previewRevisionId: string | null;
	previewContentFileId: string | null;
	previewLetterheadFileId: string | null;
}
