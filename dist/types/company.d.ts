export interface ICompany {
	address?: Record<string, string | boolean | null> | null;
	createdAt: Date;
	id: string;
	paymentCycleConfigId?: string | null;
	name: string;
	abbreviation: string;
	registrationNumber: string;
	primaryKey: string;
	updatedAt: Date;
	folderKey: string;
	parentCompanyId?: string;
	logoId?: string;
	stampId?: string;
	letterheadId: string | null;
	metadata?: any;
}
