import type { IModel } from "./models";
import type { IStructuredContentData, IStructuredContentNode } from "./structured-content";

export interface IStructuredContent {
	createdAt: string;
	data: IStructuredContentData;
	id: string;
	key: string;
	metadata?: Record<string, any>;
	rawData: unknown;
	relation: IModel;
	relationId: string;
	structure: IStructuredContentNode[];
	updatedAt?: string;
}
