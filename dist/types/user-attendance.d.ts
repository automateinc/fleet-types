export interface IUserAttendance {
	id: string;
	createdAt: string;
	updatedAt?: string;
	userId: string;
	attendanceDate: string;
	checkInTime: string;
	lastStartedAt: string;
	checkOutTime?: string;
	checkOutType?: "MANUAL" | "AUTOMATIC";
	dailyHours: number;
	regularEndsAt: string;
	workedSeconds: number;
	overtimeSeconds: number;
	regularReminderSentAt?: string;
	overtimeStartedAt?: string;
	nextOvertimeReminderAt?: string;
	overtimeResponseDueAt?: string;
	resumedFromId?: string;
}
