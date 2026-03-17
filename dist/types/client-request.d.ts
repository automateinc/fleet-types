export interface IClientRequest {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	archivedAt?: string;
	withdrawnAt?: string;

	typeId: string;
	categoryId: string;
	clientId: string;
	createdById: string;

	verifiedById?: string;
	rejectedById?: string;
	folderKey?: string | null;

	status: "PENDING_APPROVAL" | "APPROVED" | "REJECTED" | "WITHDRAWN" | "PENDING_VERIFICATION" | "ARCHIVED";
	actionsExecutionStatus: "PENDING" | "COMPLETED" | "PROCESSING" | "FAILED" | "SKIPPED";

	metadata?: any;
}
