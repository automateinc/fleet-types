export interface IEmployeeMonthlyPayroll {
	id: string;
	updatedAt: string;
	createdAt: string;

	status: "PENDING" | "APPROVED" | "PROCESSED";

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
}
