export interface IContractDeduction {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	name: string;
	type: "PERCENTAGE" | "FIXED";
	value: number;
	contractual: boolean;
	regionId: string;
	companyId?: string;
	computedValue: number;
}
