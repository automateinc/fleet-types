import { IEmployee } from ".";

export interface IClientRequestVerification {
	createdAt: string;
	updatedAt: string;
	id: string;

	status: "APPROVED" | "REJECTED" | "PENDING";
	verifiedById: string;
	verifiedBy: IEmployee;

	rejectionReason?: string;
	metadata?: any;
}
