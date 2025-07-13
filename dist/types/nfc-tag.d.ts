export interface INFCTag {
	id: string;
	createdAt: string;
	updatedAt: string;

	name?: string;
	type: "SITE_INFORMATION" | "EMPLOYEE" | "PATROLLING";
	uri: string;
	data?: any;
	siteId?: string;
	employeeId?: string;
	positionPatrolPointId?: string;
}
