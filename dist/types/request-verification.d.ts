import { IEmployee } from ".";

export interface IRequestVerification {
	createdAt: string;
	updatedAt: string;
	id: string;

	status: "APPROVED" | "REJECTED" | "PENDING";
	verifiedById: string;
	verifiedBy: IEmployee;

	rejectionReason?: string;
	metadata?: any;
}
