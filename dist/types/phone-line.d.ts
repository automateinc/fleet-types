export interface IPhoneLine {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	number: string;
	note?: string;

	assignment: "EMPLOYEE" | "USER" | "SITE" | "POSITION" | "UNASSIGNED";
	status: "ACTIVE" | "TERMINATED";

	packageId: string;
	contractId: string;

	employeeId?: string;
	userId?: string;
	siteId?: string;
	positionId?: string;
}
