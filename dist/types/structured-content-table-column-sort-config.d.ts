import type { StructuredContentTableSortOrder } from "./structured-content";
import type { StructuredContentTableSortType } from "./structured-content";

export interface IStructuredContentTableColumnSortConfig {
	sortOrder?: StructuredContentTableSortOrder;
	sortType?: StructuredContentTableSortType;
	sortable?: boolean;
}
