export interface IClientQuotationLine {
	id: string;
	createdAt: string;
	updatedAt: string;

	quotationId: string;
	employeeGroupId: string;
	roleId: string;

	headcount: number;
	pricePerHead: number;

	metadata?: any;
}
