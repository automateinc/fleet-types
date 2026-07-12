import type { IStructuredContentNodeBase } from "./structured-content-node-base";
import type { IStructuredContentNode } from "./structured-content";

export interface IStructuredContentCollapseNode extends IStructuredContentNodeBase {
	children?: IStructuredContentNode[];
	config?: {
		title?: string;
	};
	type: "COLLAPSE";
}
