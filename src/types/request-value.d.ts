import { IFile, IRequestCategoryField } from ".";
import { IModel } from "./models";

export interface IRequestValue {
	type: IRequestCategoryField["type"];
	name: string;
	value: any;
	model?: IModel;
	required?: boolean;
	relation?: {
		[key: string]: any;
	};
	relationValue?: string;
	file?: IFile;
}
