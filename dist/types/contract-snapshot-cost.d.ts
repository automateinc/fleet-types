export interface IContractSnapshotCost {
	id: string;
	createdAt: string;
	updatedAt?: string;

	snapshotId: string;
	sourceCostId?: string;

	name: string;
	value: number;

	recurrence?: "ONE_TIME" | "RECURRING";

	duration?: number;
	durationType?: "DAY" | "WEEK" | "MONTH" | "YEAR";

	metadata?: any;
}