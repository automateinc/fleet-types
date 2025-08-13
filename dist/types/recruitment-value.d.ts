import { IModel } from "./models";
import { IRecruitmentCategoryField } from ".";

export interface IRecruitmentValue {
	id: string;
	type: IRecruitmentCategoryField["type"];
	name: string;
	value: any;
	config?: {
		model?: IModel;
		options?: Array<{ label: string; value: string } | string>;
		optionsUrl?: string;
		dependencies?: string[];
		hasDependency?: boolean;
		uploadCategory?: string;
	};
	metadata?: any;
	categoryId: string;
	clientId?: string;
	companyId?: string;
	contactId?: string;
	contractId?: string;
	fileId?: string;
	paymentCycleId?: string;
	zoneId?: string;
	recruitmentId: string;
	createdAt: string;
	updatedAt: string;
}
