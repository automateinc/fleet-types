export interface IAttendancePatrolPoint {
	id: string;
	createdAt: string;
	updatedAt?: string;

	notes?: string;
	status: "PENDING" | "COMPLETED" | "SKIPPED" | "ON_HOLD";
	order: number;

	positionPatrolPointId: string;
	attendancePatrolId: string;
	fileId?: string;
	reportId?: string;

	patrolId: string;
}
