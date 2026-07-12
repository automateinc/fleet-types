import type { IPhoneAdminAgent } from "./phone-admin-agent";
import type { IPhoneAdminQueue } from "./phone-admin-queue";
import type { IPhoneAdminSystemConfig } from "./phone-admin-system-config";
import type { IPhoneAdminSummary } from "./phone-admin-summary";

export interface IPhoneAdminSnapshot {
	agents: IPhoneAdminAgent[];
	users: IPhoneAdminAgent[];
	queues: IPhoneAdminQueue[];
	sipProfiles?: unknown[];
	promptAudio?: unknown[];
	systemConfig?: IPhoneAdminSystemConfig | null;
	summary: IPhoneAdminSummary;
}
