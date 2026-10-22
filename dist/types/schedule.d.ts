export interface ISchedule {
	id: string;
	createdAt: string;
	updatedAt: string;

	dayOfWeek: "SATURDAY" | "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY";
	shiftId?: string;

	metadata?: any;
}
