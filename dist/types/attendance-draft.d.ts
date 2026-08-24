export interface IAttendanceDraft {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	acceptedAt?: string;
	rejectedAt?: string;

	date: string;

	status: "DRAFT" | "PENDING" | "ACCEPTED" | "REJECTED";
	isOvertime: boolean;

	scheduleId: string;

	employeeId: string;

	generatedById?: string;

	metadata?: any;
}
