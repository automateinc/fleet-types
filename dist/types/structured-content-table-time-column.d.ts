import type { IStructuredContentTableColumnSortConfig } from "./structured-content-table-column-sort-config";
import type { IStructuredContentTableNamedColumnBase } from "./structured-content-table-named-column-base";

export interface IStructuredContentTableTimeColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "TIME";
}
