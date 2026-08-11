import { AssetProcurementStatus } from "./asset-procurement";

export interface IAssetProcurementStatusHistory {
	id: string;
	createdAt: string;
	procurementId: string;
	fromStatus?: AssetProcurementStatus;
	toStatus: AssetProcurementStatus;
	changedById: string;
	reason?: string;
}
