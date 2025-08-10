export interface ILoanInstallment {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	status: "PENDING" | "PAID" | "OVERDUE" | "CANCELLED";

	dueDate: string;

	amount: number;

	loanId: string;
	metadata?: any;
}
