export interface IScheduleDraft {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	acceptedAt?: string;
	rejectedAt?: string;

	date: string;

	status: "DRAFT" | "PENDING" | "ACCEPTED" | "REJECTED";

	scheduleId: string;

	employeeId: string;

	generatedById?: string;

	metadata?: any;
}
