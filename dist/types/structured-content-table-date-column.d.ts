import type { IStructuredContentTableColumnSortConfig } from "./structured-content-table-column-sort-config";
import type { IStructuredContentTableNamedColumnBase } from "./structured-content-table-named-column-base";

export interface IStructuredContentTableDateColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "DATE";
}
