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
