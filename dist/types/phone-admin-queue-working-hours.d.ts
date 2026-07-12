import type { IPhoneAdminQueueWorkingHoursDay } from "./phone-admin-queue-working-hours-day";

export interface IPhoneAdminQueueWorkingHours {
	monday: IPhoneAdminQueueWorkingHoursDay;
	tuesday: IPhoneAdminQueueWorkingHoursDay;
	wednesday: IPhoneAdminQueueWorkingHoursDay;
	thursday: IPhoneAdminQueueWorkingHoursDay;
	friday: IPhoneAdminQueueWorkingHoursDay;
	saturday: IPhoneAdminQueueWorkingHoursDay;
	sunday: IPhoneAdminQueueWorkingHoursDay;
}
