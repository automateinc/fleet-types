export interface IPhoneLineContract {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	identifier: string;
	startDate?: string;
	endDate?: string;
	status: "ACTIVE" | "INACTIVE" | "ENDED";

	vendorId: string;
	companyId: string;
	metadata?: any;
}
