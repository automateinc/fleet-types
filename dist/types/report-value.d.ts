import { IFile, IReportCategoryField } from ".";
import { IModel } from "./models";

export interface IReportValue {
	id: string;
	type: IReportCategoryField["type"];
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
