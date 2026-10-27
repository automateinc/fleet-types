export interface IPaymentCycleConfig {
	id: string;
	createdAt: Date;
	from: number;
	to: number | null;
	regionId: string;
	metadata?: any;
}
