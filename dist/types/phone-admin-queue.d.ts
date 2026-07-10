import type { IPhoneAdminPromptFields } from "./phone-admin-prompt-fields";
import type { IPhoneAdminQueueWorkingHours } from "./phone-admin-queue-working-hours";

export interface IPhoneAdminQueue extends IPhoneAdminPromptFields {
	id: string;
	orgId: string;
	key: string;
	name: string;
	sipProfileId: string | null;
	noAnswerTimeoutSeconds: number;
	workingHoursEnabled: boolean;
	workingHoursTimezone: string;
	workingHours: IPhoneAdminQueueWorkingHours;
	localQueueId?: string;
	zoneId?: string;
	employeeGroupId?: string;
	syncStatus?: string | null;
	syncError?: string | null;
	syncedAt?: string | null;
	createdAt: string;
}
