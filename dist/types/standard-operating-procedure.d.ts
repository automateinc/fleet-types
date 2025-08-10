export interface IStandardOperatingProcedure {
	id: string;
	updatedAt: Date;
	createdAt: Date;

	procedures: Array<{
		values: string[];
		locale: string;
	}>;

	positionId?: string;
	siteId?: string;
	metadata?: any;
}
