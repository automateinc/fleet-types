//! This is a fake type definition file to fix type errors when building & retain mock data.
//TODO: ONLY FOR SHOWCASE REMOVE LATER.

export interface IScheduleAttendance {
	id: string;
	client?: string;
	createdAt: string;
	updatedAt: string;
	date: string;
	dispatchTime?: string;
	endTime?: string;
	nationality?: string;
	overtime: boolean;
	position?: string;
	requiredGender: boolean;
	requiredNationality: boolean;
	requiredRetired: boolean;
	roleId: string;
	shiftDuration: number;
	shiftName: string;
	siteZone?: string;
	startTime?: string;
	siteLocation?: string;
	siteName?: string;
}
