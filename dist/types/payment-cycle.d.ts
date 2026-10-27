export interface IPaymentCycle {
	id: string;
	configId: string;
	createdAt: Date;
	from: Date;
	to: Date;
	metadata?: any;
}
