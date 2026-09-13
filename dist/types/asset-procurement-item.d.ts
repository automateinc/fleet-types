export interface IAssetProcurementItem {
	id: string;
	createdAt: string;
	updatedAt?: string;

	procurementId: string;
	typeId: string;
	categoryId: string;
	quantity: number;
	orderedQuantity?: number;
	receivedQuantity: number;
	notes?: string;
	requestedForId?: string;
	metadata?: any;
}
