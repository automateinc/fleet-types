export interface IEmployeeMonthlyPayroll {
	id: string;
	updatedAt: string;
	createdAt: string;

	payrollConfigVersionId?: string | null;
	payingCompanyId?: string | null;
	status: "PENDING" | "HOLD" | "APPROVED" | "PROCESSED" | "ARCHIVED";

	metadata?: any;
	payroll: {
		outputs: {
			[key: string]: any;
		};
		metrics: {
			[key: string]: any;
		};
		warnings: {
			[key: string]: boolean;
		};
	};
	formatted: Record<
		string,
		{
			id: string;
			title: string;
			value: any;
		}
	>;
}
