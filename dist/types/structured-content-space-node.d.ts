import type { IStructuredContentNode } from "./structured-content";
import type { IStructuredContentNodeBase } from "./structured-content-node-base";

export interface IStructuredContentSpaceNode extends IStructuredContentNodeBase {
	children?: IStructuredContentNode[];
	type: "SPACE";
}
