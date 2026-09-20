import type { IStructuredContentNode } from "./structured-content";
import type { IStructuredContentNodeBase } from "./structured-content-node-base";

export interface IStructuredContentCollapseNode extends IStructuredContentNodeBase {
	children?: IStructuredContentNode[];
	config?: {
		title?: string;
	};
	type: "COLLAPSE";
}
