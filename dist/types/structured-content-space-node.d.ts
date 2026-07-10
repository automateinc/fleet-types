import type { IStructuredContentNodeBase } from "./structured-content-node-base";
import type { IStructuredContentNode } from "./structured-content";

export interface IStructuredContentSpaceNode extends IStructuredContentNodeBase {
	children?: IStructuredContentNode[];
	type: "SPACE";
}
