import { IDayOfWeek } from "./day-of-week";

export interface IClientContract {
	id: string;
	createdAt: string;
	updatedAt: string;

	primaryKey: string;
	status: "INACTIVE" | "ACTIVE" | "TERMINATED" | "EXPIRED";
	clientId: string;
	companyId: string;
	startDate: string;
	endDate?: string;
	duration?: number | "ONGOING";

	coverage: IDayOfWeek[];
	nationalities: string[];
	requirements: string[];
	costPerHead: number;
	shiftCoverage: number;
	monthlyAmount: number;
	paymentDate: string;
	performanceBondAmount: number;
	thirdPartyLiabilityInsurance: boolean;
	notes: string;
	supplementalAgreementId?: string;
	personInChargeId?: string;
	parentContractId?: string;
	manPower?: number;

	metadata?: any;
}
