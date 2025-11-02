export interface IAttendanceDraft {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	date: string;

	status: "DRAFT" | "PENDING" | "ACCEPTED" | "REJECTED";

	dayOfWeek: "SATURDAY" | "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY";

	scheduleId: string;

	employeeId: string;

	generatedById?: string;

	metadata?: any;
}
