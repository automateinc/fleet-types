import { AssetAssignmentAction } from "./asset-assignment-history";

export interface IPhoneLineAssignmentHistory {
	id: string;
	createdAt: string;
	action: AssetAssignmentAction;

	phoneLineId: string;
	employeeId?: string | null;
	userId?: string | null;
	siteId?: string | null;
	positionId?: string | null;
	performedByUserId: string;
}
