export interface IPhoneAdminAssignedQueue {
	id: string;
	key: string;
	name: string;
}

export interface IPhoneAdminQueueWorkingHoursDay {
	enabled: boolean;
	startTime: string;
	endTime: string;
}

export interface IPhoneAdminQueueWorkingHours {
	monday: IPhoneAdminQueueWorkingHoursDay;
	tuesday: IPhoneAdminQueueWorkingHoursDay;
	wednesday: IPhoneAdminQueueWorkingHoursDay;
	thursday: IPhoneAdminQueueWorkingHoursDay;
	friday: IPhoneAdminQueueWorkingHoursDay;
	saturday: IPhoneAdminQueueWorkingHoursDay;
	sunday: IPhoneAdminQueueWorkingHoursDay;
}

export interface IPhoneAdminPromptFields {
	onGreetingBusinessHoursFile: string;
	onGreetingAfterHoursFile: string;
	onQueueEntryFile: string;
	onHoldLoopFile: string;
	onQueueMessagePeriodicFile: string;
	onQueuePositionFile: string;
	onConnectingFile: string;
	onTransferFile: string;
	onRingbackFile: string;
	onBusyUnavailableFile: string;
	onNoAnswerFile: string;
	onAnnouncementFile: string;
	onGoodbyeEndCallFile: string;
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

export interface IPhoneAdminSystemConfig extends IPhoneAdminPromptFields {
	id: string;
	orgId: string;
	updatedAt: string;
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
	sipProfiles?: unknown[];
	promptAudio?: unknown[];
	systemConfig?: IPhoneAdminSystemConfig | null;
	summary: IPhoneAdminSummary;
}
