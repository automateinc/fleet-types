export interface IClientQuotation {
	id: string;
	createdAt: string;
	updatedAt: string;

	status: "DRAFT" | "PENDING_APPROVAL" | "APPROVED" | "REJECTED" | "CHANGES_NEEDED";

	clientId: string;
	createdById?: string;
	approvedById?: string;

	sentForApprovalAt?: string;
	approvedAt?: string;

	previousVersionId?: string;
	taxRate: number;

	reason?: string;

	metadata?: any;
}
