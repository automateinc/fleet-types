import { IDayOfWeek } from "./day-of-week";

export type IScheduleDayOff = {
	id: string;
	createdAt: string;
	updatedAt?: string;

	dayOfWeek: IDayOfWeek
	employeeId: string;

	metadata?: any;
};
