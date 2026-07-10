import type { IStructuredContentTableNamedColumnBase } from "./structured-content-table-named-column-base";
import type { IStructuredContentTableColumnSortConfig } from "./structured-content-table-column-sort-config";

export interface IStructuredContentTableTextColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "TEXT";
}
