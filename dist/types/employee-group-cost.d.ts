export interface IEmployeeGroupCost {
	id: string;
	createdAt: string;
	updatedAt?: string;

	name: string;
	value: number;

	recurrence?: "ONE_TIME" | "RECURRING";

	duration?: number;
	durationType?: "DAY" | "WEEK" | "MONTH" | "YEAR";

	employeeGroupId: string;

	metadata?: any;
}