export interface IContract {
	basicSalary: number;
	companyId: string;
	createdAt: Date;
	id: string;
	type: "FULL_TIME" | "PART_TIME" | "FREELANCE";
	roleId: string;
	primaryKey: string;
	totalSalary: number;
	updatedAt: Date;
	dailyHours: number;
	monthlyDaysOff: number;
	contractDuration: number;
	overtimeRate: number;
	contractualAllowancesProvided: boolean;
	paymentType: "TRANSFER" | "CASH" | "CHECK" | "UNPAID" | "FORSA" | "OTHER";
}
