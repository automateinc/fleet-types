import { IReportCategoryField } from ".";

export interface IReportCategory {
	id: string;
	name: string;
	typeId: string;
	fields: IReportCategoryField[];
	createdAt: string;
	updatedAt: string;
	metadata?: any;
}
