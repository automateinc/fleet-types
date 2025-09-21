export interface IPaymentCycleConfig {
	id: string;
	createdAt: Date;
	from: number;
	to: number;
	companyId: string;
	metadata?: any;
}
