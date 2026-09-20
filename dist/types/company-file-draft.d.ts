export interface ICompanyFileDraft {
	id: string;
	createdAt: string;
	updatedAt: string | null;

	companyFileId: string;
	fileId: string;
	updatedById: string | null;

	revision: number;
	checksum: string;
	previewedRevision: number | null;
	previewedAt: string | null;
}
