import type { StructuredContentMetadata } from "./structured-content-metadata";
import type { StructuredDatasetBinding } from "./structured-view-binding";
import type { StructuredViewNode } from "./structured-view-node";

export type StructuredContentVersionStatus = "DRAFT" | "PUBLISHED" | "ARCHIVED";

export interface IStructuredContentVersion {
	id: string;
	createdAt: string;
	updatedAt: string | null;
	contentId: string;
	version: number;
	status: StructuredContentVersionStatus;
	name: string | null;
	structure: StructuredViewNode[];
	bindings: Record<string, StructuredDatasetBinding> | null;
	metadata: StructuredContentMetadata | null;
	datasetId: string | null;
	navigationId: string | null;
	urlOverride: string | null;
	presentationForId: string | null;
}
