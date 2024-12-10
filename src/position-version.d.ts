export interface IPositionVersion {
	id: string;
	updatedAt: Date;
	createdAt: Date;

	status: "UNVERIFIED" | "PENDING_VERIFICATION" | "VERIFIED" | "REJECTED";
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

	positionId: string;
	activePositionId: string;
}
