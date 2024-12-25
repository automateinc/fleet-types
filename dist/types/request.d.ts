import { IRequestCategory, IRequestType, IRequestValue } from ".";

export interface IRequest {
	approvedAt: Date;
	createdAt: string;
	updatedAt: string;
	id: string;
	category: IRequestCategory;
	categoryId: string;
	createdById: string;
	rejectionReason: null;
	requestForId: string;
	type: IRequestType;
	typeId: string;
	values: IRequestValue[];
	verifiedAt: Date;
	verifiedById?: string;
	rejectedById?: string;
	withdrawnAt?: string;
	folderKey?: string | null;
	archivedAt?: string | null;
	status: "PENDING_APPROVAL" | "APPROVED" | "REJECTED" | "WITHDRAWN" | "PENDING_VERIFICATION" | "ARCHIVED";
	actionsExecutionStatus: "PENDING" | "COMPLETED" | "PROCESSING" | "FAILED" | "SKIPPED";
}
