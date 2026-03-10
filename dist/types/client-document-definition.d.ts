import { IClientRequestCategory } from "./client-request-category";
import { IClientRequestCategoryField } from "./client-request-category-field";
import { IClientRequestType } from "./client-request-type";
import { IClientStatus } from "./client-status";
import { IMetadata } from "./metadata";

export type IClientDocumentDefinitionType = "VIEWING" | "MISSING" | "EXPIRING";

export type IClientDocumentDefinitionField = IClientRequestCategoryField & {
	category: IClientRequestCategory & {
		type: IClientRequestType;
	};
};

export interface IClientDocumentDefinition {
	id: string;
	createdAt: string;
	updatedAt?: string | null;

	regionId: string;

	name: string;
	type: IClientDocumentDefinitionType;

	documentFieldId: string;
	documentField: IClientDocumentDefinitionField;

	dateFieldId?: string | null;
	dateField?: IClientDocumentDefinitionField | null;

	statuses: IClientStatus[];
	metadata?: IMetadata;
}
