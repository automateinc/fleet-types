export interface IContractSnapshotBenefit {
	id: string;
	createdAt: Date;
	updatedAt?: Date;

	snapshotId: string;
	sourceBenefitId?: string;

	name: string;

	regionId: string;
	companyId?: string;

	metadata?: any;
}