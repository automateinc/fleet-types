export interface IAttendancePatrolPoint {
	id: string;
	createdAt: string;
	updatedAt?: string;

	notes?: string;
	status: "PENDING" | "COMPLETED" | "SKIPPED";

	positionPatrolPointId: string;
	attendancePatrolId: string;
	fileId?: string;

	patrolId: string;
}
