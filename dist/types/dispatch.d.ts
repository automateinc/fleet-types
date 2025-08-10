export interface IDispatch {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt: string;
	status: "PENDING" | "FLEET_CHECK" | "FLEET_CHECK_COMPLETE" | "IN_PROGRESS" | "COMPLETE" | "INTERRUPTED" | "NOT_SET";
	statusUpdatedAt: string;
	date: string;
	verified: boolean;
	// timeOnSite: number;
	fleetCheckTime: string;
	zoneId: string;
	primaryKey: string;
	metadata?: any;
}
