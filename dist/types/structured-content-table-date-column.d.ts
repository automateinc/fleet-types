import type { IStructuredContentTableNamedColumnBase } from "./structured-content-table-named-column-base";
import type { IStructuredContentTableColumnSortConfig } from "./structured-content-table-column-sort-config";

export interface IStructuredContentTableDateColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "DATE";
}
