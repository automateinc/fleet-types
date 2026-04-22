export interface IContract {
	basicSalary: number;
	companyId: string;
	createdAt: string;
	deletedAt?: string;
	id: string;
	type: "FULL_TIME" | "PART_TIME" | "FREELANCE";
	roleId: string;
	primaryKey: string;
	totalSalary: number;
	updatedAt: string;
	dailyHours: number;
	monthlyDaysOff: number;
	workingDaysPerWeek: number;
	contractDuration: number;
	overtimeRate: number;
	commissionRate: number;
	contractualAllowancesProvided: boolean;
	paymentType: "TRANSFER" | "CASH" | "CHECK" | "UNPAID" | "FORSA" | "OTHER";
	metadata?: any;
}
