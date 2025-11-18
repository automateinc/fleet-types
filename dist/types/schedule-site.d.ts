export interface IScheduleSite {
	id: string;
	createdAt: string;
	updatedAt: string;

	shiftsCount: number;
	positionsCount: number;
	schedulesCount: number;
	scheduledSchedulesCount: number;
	metadata?: any;
}
