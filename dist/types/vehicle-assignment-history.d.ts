import { AssetAssignmentAction } from "./asset-assignment-history";

export interface IVehicleAssignmentHistory {
	id: string;
	createdAt: string;
	action: AssetAssignmentAction;

	vehicleId: string;
	employeeId?: string | null;
	userId?: string | null;
	positionId?: string | null;
	performedByUserId: string;
}
