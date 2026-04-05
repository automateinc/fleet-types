export interface IContractCost {
	id: string;
	createdAt: string;
	updatedAt: string;

  name: string;

  recurrence: "ONE_TIME" | "RECURRING";

  duration?: number;
  durationType?: "DAY" | "WEEK" | "MONTH" | "YEAR";

  contractId: string;

  metadata?: any;
}
