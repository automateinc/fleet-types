import { IFile, IRequestCategoryField } from ".";
import { IModel } from "./models";

export interface IRequestValue {
	type: IRequestCategoryField["type"];
	name: string;
	value: any;
	model?: IModel;
	config?: {
		[key: PropertyKey]: any;
	};
	required?: boolean;
	relation?: {
		[key: PropertyKey]: any;
	};
	relationValue?: string;
	file?: IFile;
}
