import type { IDayOfWeek } from "./day-of-week";

export interface IScheduleAssignmentPolicy {
	id: string;
	createdAt: string;
	updatedAt?: string | null;

	name: string;
	enabled: boolean;
	priority: number;

	contractDailyHours?: number | null;
	gender?: string | null;

	regularHoursLimit?: number | null;
	maximumDailyHours: number;
	maximumShiftHours: number;
	maximumDaysPerWeek?: number | null;
	minimumRestHours: number;
	weekStartsOn: IDayOfWeek;
	allowFlexibleOverlap: boolean;
	flexibleBypassesWeeklyLimit: boolean;

	regionId: string;
}
