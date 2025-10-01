import { IDayOfWeek } from "./day-of-week";

export interface IPatrol {
	id: string;
	createdAt: string;
	updatedAt?: string;

	name: string;
	description?: string;
	flow: "SEQUENTIAL" | "RANDOM";
	frequency: number;
	days: IDayOfWeek[];

	positionId?: string;
	regionId: string;
	metadata?: any;
}
