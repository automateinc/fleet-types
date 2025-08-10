export interface IDispatchAttendance {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt: string;
	type: "DROP_OFF" | "PICK_UP" | "INSPECTION";
	checked: boolean | null;
	dispatchId: string;
	attendanceId: string;
	metadata?: any;
}
