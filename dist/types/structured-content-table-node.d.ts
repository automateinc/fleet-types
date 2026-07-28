import type { IStructuredContentTableColumn } from "./structured-content";
import type { IStructuredContentNodeBase } from "./structured-content-node-base";
import type { IStructuredContentTablePagination } from "./structured-content-table-pagination";
import type { IStructuredContentTableToolbar } from "./structured-content-table-toolbar";

export interface IStructuredContentTableNode extends IStructuredContentNodeBase {
	config?: {
		columns?: IStructuredContentTableColumn[];
		pagination?: IStructuredContentTablePagination;
		toolbar?: IStructuredContentTableToolbar;
	};
	type: "TABLE";
}
