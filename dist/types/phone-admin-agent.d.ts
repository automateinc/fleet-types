import type { IPhoneAdminAssignedQueue } from "./phone-admin-assigned-queue";

export interface IPhoneAdminAgent {
	id: string;
	orgId: string;
	orgName?: string | null;
	name: string;
	role: "agent" | "user";
	extension: string;
	queueId: string | null;
	queueKey?: string | null;
	queueName?: string | null;
	assignedQueueIds: string[];
	assignedQueues: IPhoneAdminAssignedQueue[];
	sipProfileId: string | null;
	sipProfileName?: string | null;
	metadata?: Record<string, string | undefined>;
	localEntityId?: string;
	syncStatus?: string | null;
	syncError?: string | null;
	syncedAt?: string | null;
	createdAt: string;
}
