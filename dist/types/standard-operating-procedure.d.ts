export interface IStandardOperatingProcedure {
	id: string;
	updatedAt: Date;
	createdAt: Date;

	procedures: Array<{
		values: Array<{
			title: string;
			content: string;
		}>;
		locale: string;
	}>;

	positionId?: string;
	siteId?: string;
	metadata?: any;
}
