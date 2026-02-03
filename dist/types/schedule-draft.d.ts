export interface IScheduleDraft {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	acceptedAt?: string;
	rejectedAt?: string;

	date: string;

	acceptedBy?: "EMPLOYEE" | "SYSTEM";
	status: "DRAFT" | "PENDING" | "ACCEPTED" | "REJECTED";

	scheduleId: string;

	employeeId: string;

	generatedById?: string;

	verified: boolean;

	metadata?: any;
}
