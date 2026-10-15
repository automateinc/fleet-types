export type AssetAssignmentAction = "ASSIGNED" | "UNASSIGNED";

export interface IAssetAssignmentHistory {
	id: string;
	createdAt: string;
	action: AssetAssignmentAction;

	assetId: string;
	employeeId?: string | null;
	userId?: string | null;
	siteId?: string | null;
	positionId?: string | null;
	vehicleId?: string | null;
	performedByUserId: string;
}
