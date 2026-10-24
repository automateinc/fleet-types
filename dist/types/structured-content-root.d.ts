import type { StructuredContentMetadata } from "./structured-content-metadata";
import type { StructuredViewBinding } from "./structured-view-binding";
import type { StructuredViewNode } from "./structured-view-node";

export interface IStructuredContent {
	id: string;
	createdAt: string;
	updatedAt: string | null;
	key: string;
	name: string | null;
	structure: StructuredViewNode[];
	bindings: Record<string, StructuredViewBinding> | null;
	metadata: StructuredContentMetadata | null;
	regionId: string | null;
	datasetId: string | null;
	navigationId: string | null;
	urlOverride: string | null;
	previousUrls: string[];
	presentationForId: string | null;
}
