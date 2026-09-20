export type CompanyFileKind = "FILE" | "TEMPLATE" | "LETTERHEAD";

export interface ICompanyFile {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	kind: CompanyFileKind;
	fileId: string;
	companyId: string;
	metadata?: any;
}
