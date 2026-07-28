import type { StructuredContentTagTone } from "./structured-content";
import type { IStructuredContentNodeBase } from "./structured-content-node-base";

export interface IStructuredContentTagNode extends IStructuredContentNodeBase {
	config?: {
		tone?: StructuredContentTagTone;
	};
	type: "TAG";
}
