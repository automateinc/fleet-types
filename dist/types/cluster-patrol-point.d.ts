export interface IClusterPatrolPoint {
	id: string;
	createdAt: string;
	updatedAt?: string;

	notes?: string;
	status: "PENDING" | "COMPLETED" | "SKIPPED" | "ON_HOLD";
	order: number;

	patrolPointId: string;
	clusterPatrolId: string;
	fileId?: string;
	reportId?: string;

	patrolId: string;
	metadata?: any;
}
