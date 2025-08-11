import { IRecruitmentCategoryField } from ".";

export interface IRecruitmentCategory {
	id: string;
	name: string;
	typeId: string;
	fields: IRecruitmentCategoryField[];
	createdAt: string;
	updatedAt: string;
	metadata?: any;
}
