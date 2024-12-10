export interface IReportComment {
	id: string;
	createdAt: Date;
	updatedAt: Date;
	deletedAt?: Date;

	reportId: string;
	userId: string;

	comment: string;
}
