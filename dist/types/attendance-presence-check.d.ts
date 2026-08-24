import { ICoords } from "./coords";

export type AttendancePresenceCheckStatus =
	| "SCHEDULED"
	| "PENDING"
	| "AWAITING_RETURN"
	| "PASSED"
	| "MISSED"
	| "RESOLVED"
	| "CANCELLED";

export interface IAttendancePresenceCheck {
	id: string;
	createdAt: string;
	updatedAt?: string;

	status: AttendancePresenceCheckStatus;
	createdBy: "USER" | "SYSTEM";
	scheduledAt: string;
	requestedAt?: string;
	openedAt?: string;
	responseDueAt?: string;
	respondedAt?: string;
	resolvedAt?: string;
	attendanceId: string;
	userId?: string;
	resolvedById?: string;
	imageId?: string;
	lastLocation?: ICoords;
	metadata?: any;
}
