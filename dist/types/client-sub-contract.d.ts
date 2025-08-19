export interface IClientSubContract {
	id: string;
	createdAt: string;
	updatedAt: string;

	status: "INACTIVE" | "ACTIVE" | "TERMINATED";
	contractId: string;
	startDate: string;
	endDate?: string;
	duration?: number | "ONGOING";
	manPower?: number;
	notes: string;

	metadata?: any;
}
