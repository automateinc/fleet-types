import type { IStructuredContentNodeBase } from "./structured-content-node-base";
import type { StructuredContentLinkVariant } from "./structured-content";

export interface IStructuredContentLinkNode extends IStructuredContentNodeBase {
	config?: {
		variant?: StructuredContentLinkVariant;
	};
	type: "LINK";
}
