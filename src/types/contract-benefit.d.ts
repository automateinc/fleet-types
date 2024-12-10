export interface IContractBenefit {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	name: string;
	regionId: string;
	companyId?: string;
}
