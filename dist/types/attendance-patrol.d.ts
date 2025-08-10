export interface IAttendancePatrol {
	id: string;
	createdAt: string;
	updatedAt?: string;

	positionPatrolId: string;
	attendanceId: string;
	reportId?: string;
	metadata?: any;
}
