import type { IStructuredContentTableNamedColumnBase } from "./structured-content-table-named-column-base";
import type { IStructuredContentTableColumnSortConfig } from "./structured-content-table-column-sort-config";

export interface IStructuredContentTableLinkColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "LINK";
}
