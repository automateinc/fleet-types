import type { IPhoneAdminPromptFields } from "./phone-admin-prompt-fields";

export interface IPhoneAdminSystemConfig extends IPhoneAdminPromptFields {
	id: string;
	orgId: string;
	updatedAt: string;
}
