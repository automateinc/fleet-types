import { IShiftType } from ".";

export interface IShift {
	id: string;
	updatedAt: Date;
	createdAt: Date;

	class: "MAIN" | "OVERTIME";

	startTime: number;

	type: IShiftType;
	typeId: string;

	coversSaturday: boolean;
	coversSunday: boolean;
	coversMonday: boolean;
	coversTuesday: boolean;
	coversWednesday: boolean;
	coversThursday: boolean;
	coversFriday: boolean;

	positionId: string;
	metadata?: any;
}
