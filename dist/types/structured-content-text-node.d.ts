import type { IStructuredContentNodeBase } from "./structured-content-node-base";
import type { StructuredContentTextVariant } from "./structured-content";

export interface IStructuredContentTextNode extends IStructuredContentNodeBase {
	config?: {
		variant?: StructuredContentTextVariant;
	};
	type: "TEXT";
}
