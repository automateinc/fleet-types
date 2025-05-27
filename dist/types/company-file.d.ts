export interface ICompanyFile {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	fileId: string;
	companyId: string;
}
