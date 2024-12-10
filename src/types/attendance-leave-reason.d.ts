import { IAttendance } from ".";

export interface IAttendanceLeaveReason {
	id: string;
	createdAt: string;
	updatedAt: string;

	name: string;
	description?: string;
	attendances?: IAttendance[];
}
