export interface IRequestActionExecution {
	id: string;
	createdAt: string;
	updatedAt: string;

	actionId: string;
	status: "PENDING" | "COMPLETED" | "PROCESSING" | "FAILED" | "SKIPPED" | "ON_HOLD";
	startedAt: string | null;
	endedAt: string | null;
	failureReason?: string;
	metadata?: any;
}
