export interface ICompanyFileVersion {
	id: string;
	createdAt: string;

	companyFileId: string;
	fileId: string;
	publishedById: string | null;
	version: number;
}
