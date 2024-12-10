export interface IBuildingLeasePayment {
	id: string;
	createdAt: string;
	updatedAt: string;

	amount: number;
	date: string;

	invoiceId?: string;
	leaseId: string;

	status: "PENDING" | "PAID" | "OVERDUE" | "CANCELLED";
}
