export interface IVehicleContractPayment {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	amount: number;
	dueDate: string;

	invoiceId: string;

	contractId: string;

	status: "PENDING" | "PAID" | "OVERDUE" | "CANCELLED";
}
