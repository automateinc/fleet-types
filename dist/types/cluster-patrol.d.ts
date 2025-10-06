export interface IClusterPatrol {
	id: string;
	createdAt: string;
	updatedAt?: string;

	patrolId: string;
	date: string;
	reportId?: string;
	employeeId: string;

	metadata?: any;
}
