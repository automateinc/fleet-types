import { IRequestCategory, IRequestType, IRequestValue } from ".";

export interface IRequest {
	createdAt: string;
	updatedAt: string;
	id: string;
	category: IRequestCategory;
	categoryId: string;
	createdById?: string;
	employeeCreatedById?: string;
	rejectionReason: null;
	type: IRequestType;
	typeId: string;
	values: IRequestValue[];
	verifiedById?: string;
	rejectedById?: string;
	linkedRequestId?: string;
	withdrawnAt?: string;
	folderKey?: string | null;
	archivedAt?: string | null;
	employeeId: string;
	status: "PENDING_APPROVAL" | "APPROVED" | "REJECTED" | "WITHDRAWN" | "PENDING_VERIFICATION" | "ARCHIVED";
	actionsExecutionStatus: "PENDING" | "COMPLETED" | "PROCESSING" | "FAILED" | "SKIPPED";
	metadata?: any;
}
