export interface ILoan {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	documentId: string;
	employeeId: string;

	startDate: string;

	reason: string;

	totalAmount: number;
	repaymentPeriod: number;

	status: "PENDING" | "PAID";
}
