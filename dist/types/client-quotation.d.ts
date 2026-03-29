export interface IClientQuotation {
	id: string;
	createdAt: string;
	updatedAt: string;

	status: "DRAFT" | "PENDING_APPROVAL" | "APPROVED";

	clientId: string;
	createdById?: string;
	approvedById?: string;

	sentForApprovalAt?: string;
	approvedAt?: string;

	previousVersionId?: string;

	metadata?: any;
}
