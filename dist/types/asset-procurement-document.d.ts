export type AssetProcurementDocumentType =
	| "INVOICE"
	| "QUOTATION"
	| "PURCHASE_ORDER"
	| "DELIVERY_NOTE"
	| "RECEIPT"
	| "WARRANTY"
	| "OTHER";

export interface IAssetProcurementDocument {
	id: string;
	createdAt: string;

	procurementId: string;
	itemId?: string;
	fileId: string;
	addedById: string;
	type: AssetProcurementDocumentType;
	documentNumber?: string;
	issuedAt?: string;
	notes?: string;
}
