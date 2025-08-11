import { IFile, IRecruitmentCategoryField } from ".";
import { IModel } from "./models";

export interface IRecruitmentValue {
	id: string;
	type: IRecruitmentCategoryField["type"];
	name: string;
	value: any;
	model?: IModel;
	required?: boolean;
	relation?: {
		[key: PropertyKey]: any;
	};
	relationValue?: string;
	file?: IFile;
	metadata?: any;
}
