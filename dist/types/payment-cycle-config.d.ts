export interface IPaymentCycleConfig {
	id: string;
	createdAt: Date;
	from: number;
	to: number;
	regionId: string;
	metadata?: any;
}
