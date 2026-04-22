export interface IContractSnapshotAllowance {
	id: string;
	createdAt: Date;
	updatedAt?: Date;

	snapshotId: string;
	sourceAllowanceId?: string;

	name: string;
	type:
		| "BASE_PERCENTAGE"
		| "FIXED"
		| "BASE_PERCENTAGE_TIMES_DAYS_OFF"
		| "BASE_PERCENTAGE_TIMES_DAILY_HOURS"
		| "RAMADAN";
	value: number;

	contractual: boolean;

	regionId: string;
	companyId?: string;

	metadata?: any;
}