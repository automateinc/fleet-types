export interface IPositionVersion {
	id: string;
	updatedAt: Date;
	createdAt: Date;

	status: "UNVERIFIED" | "PENDING_VERIFICATION" | "VERIFIED" | "REJECTED" | "CHANGES_NEEDED";
	version: number;
	coversSaturday: boolean;
	coversSunday: boolean;
	coversMonday: boolean;
	coversTuesday: boolean;
	coversWednesday: boolean;
	coversThursday: boolean;
	coversFriday: boolean;
	dailyHours: number;
	dailyCoverage: string;
	weeklyCoverage: string;

	reason?: string;

	positionId: string;
	activePositionId: string;
	metadata?: any;
}
