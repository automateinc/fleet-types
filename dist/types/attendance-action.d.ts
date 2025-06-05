export interface IAttendanceAction {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	type: string;

	attendanceId: string;

	resolvedAt?: string;
	resolvedById?: string;

	metadata: any;
}
