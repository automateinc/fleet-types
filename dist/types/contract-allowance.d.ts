export interface IContractAllowance {
	id: string;
	createdAt: Date;
	updatedAt: Date;
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
	computedValue: number;
}
