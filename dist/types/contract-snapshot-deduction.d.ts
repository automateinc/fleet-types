export interface IContractSnapshotDeduction {
	id: string;
	createdAt: Date;
	updatedAt?: Date;

	snapshotId: string;
	sourceDeductionId?: string;

	name: string;
	type: "PERCENTAGE" | "FIXED";
	value: number;

	contractual: boolean;

	regionId: string;
	companyId?: string;

	metadata?: any;
}