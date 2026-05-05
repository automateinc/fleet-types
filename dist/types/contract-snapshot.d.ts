export interface IContractSnapshot {
	id: string;
	createdAt: Date;
	updatedAt?: Date;

	contractId: string;
	type: "FULL_TIME" | "PART_TIME" | "FREELANCE";
	companyId?: string;
	regionId: string;
	roleId: string;

	paymentType: "TRANSFER" | "CASH" | "CHECK" | "UNPAID" | "FORSA" | "OTHER";
	basicSalary: number;
	totalSalary: number;
	dailyHours: number;
	monthlyDaysOff: number;
	dayOffHours: number;
	workingDaysPerWeek: number;
	contractDuration?: number;
	overtimeRate: number;
	commissionRate?: number;

	contractualAllowancesProvided: boolean;

	metadata?: any;
}