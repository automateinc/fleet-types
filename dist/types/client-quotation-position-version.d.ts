import { IGender } from "./gender";

export interface IClientQuotationPositionVersion {
	id: string;
	createdAt: string;
	updatedAt: string;

	siteDraftId: string;
	positionId?: string | null;
	positionVersionId?: string | null;

	name: string;
	status:
		| "UNVERIFIED"
		| "PENDING_VERIFICATION"
		| "VERIFIED"
		| "REJECTED"
		| "CHANGES_NEEDED";
	reason?: string | null;

	coversSaturday: boolean;
	coversSunday: boolean;
	coversMonday: boolean;
	coversTuesday: boolean;
	coversWednesday: boolean;
	coversThursday: boolean;
	coversFriday: boolean;

	dailyHours: number;
	dailyCoverage: string;
	gender?: IGender | null;

	metadata?: any;
}