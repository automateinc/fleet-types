export interface IClusterPatrol {
	id: string;
	createdAt: string;
	updatedAt?: string;

	status?: "PENDING" | "COMPLETED" | "ON_HOLD";

	patrolId: string;
	date: string;
	reportId?: string;
	employeeId: string;

	metadata?: any;
}
