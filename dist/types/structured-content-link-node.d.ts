import type { StructuredContentLinkVariant } from "./structured-content";
import type { IStructuredContentNodeBase } from "./structured-content-node-base";

export interface IStructuredContentLinkNode extends IStructuredContentNodeBase {
	config?: {
		variant?: StructuredContentLinkVariant;
	};
	type: "LINK";
}
