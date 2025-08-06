import { IAssetCategoryField, IFile } from ".";
import { IModel } from "./models";

export interface IAssetValue {
	id: string;
	type: IAssetCategoryField["type"];
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
