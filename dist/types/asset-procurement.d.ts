export type AssetProcurementStatus =
	| "DRAFT"
	| "REQUESTED"
	| "APPROVED"
	| "REJECTED"
	| "ORDERED"
	| "DELIVERING"
	| "DELIVERED"
	| "COMPLETED"
	| "CANCELLED";

export type AssetProcurementOrigin = "MANUAL" | "USER_REQUEST";

export interface IAssetProcurement {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	status: AssetProcurementStatus;
	origin: AssetProcurementOrigin;
	notes?: string;
	rejectionReason?: string;
	completedAt?: string;

	regionId: string;
	vendorId?: string;
	createdById: string;
	requestedById?: string;
	completedById?: string;
	metadata?: any;
}
