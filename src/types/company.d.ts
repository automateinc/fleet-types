export interface ICompany {
	createdAt: Date;
	id: string;
	name: string;
	abbreviation: string;
	registrationNumber: string;
	primaryKey: string;
	updatedAt: Date;
	folderKey: string;
	parentCompanyId?: string;
	logoId?: string;
	stampId?: string;
}
