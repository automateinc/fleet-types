import type { IStructuredContentNode } from "./structured-content";
import type { StructuredJson } from "./structured-json";

export interface IStructuredContent {
	id: string;
	createdAt: string;
	updatedAt: string | null;
	key: string;
	structure: IStructuredContentNode[];
	bindings: StructuredJson;
	metadata?: Record<string, StructuredJson>;
	regionId: string | null;
	datasetId: string | null;
	navigationId: string | null;
	urlOverride: string | null;
	previousUrls: string[];
}
