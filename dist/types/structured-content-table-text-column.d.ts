import type { IStructuredContentTableColumnSortConfig } from "./structured-content-table-column-sort-config";
import type { IStructuredContentTableNamedColumnBase } from "./structured-content-table-named-column-base";

export interface IStructuredContentTableTextColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "TEXT";
}
