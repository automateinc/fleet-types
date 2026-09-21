export interface IUserAttendanceCheckInLocation {
	id: string;
	createdAt: string;
	capturedAt: string;
	latitude: number;
	longitude: number;
	accuracy?: number;
	isManagerCheckIn: boolean;
	attendanceId: string;
	capturedByUserId?: string;
}
