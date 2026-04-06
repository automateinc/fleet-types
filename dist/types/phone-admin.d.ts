export interface IPhoneAdminAssignedQueue {
	id: string;
	key: string;
	name: string;
}

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

export interface IPhoneAdminQueue {
	id: string;
	orgId: string;
	key: string;
	name: string;
	sipProfileId: string | null;
	onCallFile: string;
	onCallLoopFile: string;
	onAnswerFile: string;
	onHoldFile: string;
	onTransferFile: string;
	onRejectFile: string;
	onNoAnswerFile: string;
	onEndFile: string;
	localQueueId?: string;
	zoneId?: string;
	employeeGroupId?: string;
	syncStatus?: string | null;
	syncError?: string | null;
	syncedAt?: string | null;
	createdAt: string;
}

export interface IPhoneAdminSummary {
	agentCount: number;
	userCount: number;
	queueCount: number;
	defaultQueueId: string | null;
	phoneConfigured: boolean;
	resolveAgentUrlConfigured: boolean;
	reconcileActionsEnabled?: boolean;
	syncedAgentCount?: number;
	syncedUserCount?: number;
	syncedQueueCount?: number;
}

export interface IPhoneAdminSnapshot {
	agents: IPhoneAdminAgent[];
	users: IPhoneAdminAgent[];
	queues: IPhoneAdminQueue[];
	summary: IPhoneAdminSummary;
}
