import { IFile } from ".";
import { IClientRequestCategoryField } from "./client-request-category-field";

export interface IClientRequestValue {
	id: string;
	createdAt: string;
	updatedAt: string;

	name: string;
	value: any;

	type: IClientRequestCategoryField["valueType"];

	fieldId?: string;

	requestId: string;

	relationValue?: string;
	file?: IFile;

	config?: {
		[key: PropertyKey]: any;
	};

	metadata?: any;
}
