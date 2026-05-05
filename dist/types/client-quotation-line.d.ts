export interface IClientQuotationLine {
	id: string;
	createdAt: string;
	updatedAt: string;

	quotationId: string;
	employeeGroupId: string;
	employeeGroupSnapshotId: string;
	employeeContractId: string;
	employeeContractSnapshotId: string;
	employeeCompanyId: string;
	roleId: string;

	headcount: number;

	metadata?: any;
}
