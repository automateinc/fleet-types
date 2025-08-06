export interface IPaymentCycle {
	id: string;
	createdAt: Date;
	from: Date;
	to: Date;
	metadata?: any;
}
