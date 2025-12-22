export interface IPaymentCycleDocument {
	id: string;
	createdAt: string;
	updatedAt?: string;

	name: string;
	fileId: string;
	cycleId: string;

	metadata?: any;
}
