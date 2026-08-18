import type { IStructuredContentNode } from "./structured-content";
import type { IStructuredContentNodeBase } from "./structured-content-node-base";

export interface IStructuredContentGridNode extends IStructuredContentNodeBase {
	children?: IStructuredContentNode[];
	config?: {
		columns?: 1 | 2 | 3 | 4 | 5 | 6;
	};
	type: "GRID";
}
