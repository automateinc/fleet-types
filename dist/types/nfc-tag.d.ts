export interface INFCTag {
	id: string;
	createdAt: string;
	updatedAt: string;

	type: "SITE_INFORMATION" | "EMPLOYEE" | "PATROLLING";
	uri: string;
	data?: any;
	siteId?: string;
	employeeId?: string;
	positionPatrolPointId?: string;
}
