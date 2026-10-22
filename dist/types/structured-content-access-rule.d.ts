import type { StructuredAccessAction } from "./structured-access-action";
import type { StructuredAccessMode } from "./structured-access-mode";

export interface IStructuredContentAccessRule {
	id: string;
	createdAt: string;
	updatedAt: string;
	contentId: string;
	action: StructuredAccessAction;
	mode: StructuredAccessMode;
}
