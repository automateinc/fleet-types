import { IAttendanceLeaveReason, ICoords, IFile } from ".";

export interface IAttendance {
	id: string;
	createdAt: string;
	updatedAt: string;

	verified: boolean;
	approved: boolean;
	absenceType?: "DAY_OFF" | "SICK_LEAVE" | "NO_SHOW" | "LEAVE";

	checkInImage?: IFile;
	checkInImageId?: string;
	checkInLocation?: ICoords;
	checkInTime?: string;
	checkOutLocation?: ICoords;
	checkOutTime?: string;

	employeeId?: string;

	employeeStatus?: "PRESENT" | "ABSENT" | "REROUTED";
	leaveReason?: IAttendanceLeaveReason;
	leaveReasonId?: string;
	notes?: string;
	reroutedAttendanceId?: string;
	scheduleDate: string;
	scheduleId: string;
	checkInDistance: number;
	checkOutDistance: number;
	workHours: number;
	status:
		| "PROCESSED"
		| "NOT_SCHEDULED"
		| "MISSED_DISPATCH"
		| "PENDING_DISPATCH"
		| "CHECKED_IN"
		| "CHECKED_OUT"
		| "REQUIRES_ATTENTION"
		| "UNVERIFIED"
		| null;
	type: "SCHEDULED" | "REROUTED" | "REPLACEMENT";
}
