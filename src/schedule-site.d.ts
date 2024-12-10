import { IClientSite, IPosition, IZone } from ".";

export interface IScheduleSite {
	id: string;
	createdAt: string;
	updatedAt: string;

	zones?: IZone[];
	positions?: IPosition[];
	site: IClientSite;

	shiftsCount: number;
	positionsCount: number;
	schedulesCount: number;
	scheduledSchedulesCount: number;
}
