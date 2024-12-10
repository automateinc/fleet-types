export interface INFCTag {
	id: string;
	createdAt: string;
	updatedAt: string;

	type: "SITE_INFORMATION" | "EMPLOYEE";
	uri: string;
	data?: any;
	siteId?: number;
	employeeId?: number;
}
