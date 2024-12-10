export interface IRequestActionExecution {
	id: string;
	createdAt: string;
	updatedAt: string;

	actionId: string;
	status: "PENDING" | "COMPLETED" | "PROCESSING" | "FAILED" | "SKIPPED";
	startedAt: string | null;
	endedAt: string | null;
	failureReason?: string;
}
