import type { StructuredContentTextVariant } from "./structured-content";
import type { IStructuredContentNodeBase } from "./structured-content-node-base";

export interface IStructuredContentTextNode extends IStructuredContentNodeBase {
	config?: {
		variant?: StructuredContentTextVariant;
	};
	type: "TEXT";
}
