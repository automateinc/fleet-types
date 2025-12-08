export interface IAttendancePatrol {
	id: string;
	createdAt: string;
	updatedAt?: string;

	status?: 'PENDING' | 'COMPLETED' | 'ON_HOLD';

	patrolId: string;
	attendanceId: string;
	reportId?: string;
	metadata?: any;
}
