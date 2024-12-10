import { IEmployee } from ".";

export interface IScheduleDraft {
	id: string;
	createdAt: string;
	updatedAt: string;

	status: "DRAFT" | "PENDING" | "ACCEPTED" | "REJECTED";

	dayOfWeek: "SATURDAY" | "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY";
	shiftId: string;

	employee: IEmployee;
	employeeId?: string;
}
