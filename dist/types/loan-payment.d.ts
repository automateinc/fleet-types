export interface ILoanPayment {
	id: string;
	createdAt: string;
	amount: number;
	paidAt: string;
	source: "MANUAL" | "PAYROLL" | "LEGACY";
	createdById: string | null;
	monthlyPayId: string | null;
	settlementPayId: string | null;
	note: string | null;
	reversedAt: string | null;
	reversedById: string | null;
	reversalReason: string | null;
}

export interface ILoanPaymentAllocation {
	id: string;
	paymentId: string;
	installmentId: string;
	amount: number;
}
