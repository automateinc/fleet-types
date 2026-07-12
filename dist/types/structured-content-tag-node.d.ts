import type { IStructuredContentNodeBase } from "./structured-content-node-base";
import type { StructuredContentTagTone } from "./structured-content";

export interface IStructuredContentTagNode extends IStructuredContentNodeBase {
	config?: {
		tone?: StructuredContentTagTone;
	};
	type: "TAG";
}
