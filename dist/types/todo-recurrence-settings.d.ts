export interface TodoRecurrenceSettings {
	frequency: "DAILY" | "WEEKLY" | "MONTHLY" | "YEARLY";
	interval: number;
	days?: number[];
	endDate?: string;
	timezone?: string;
}
