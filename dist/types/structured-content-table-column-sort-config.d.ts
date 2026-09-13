import type { StructuredContentTableSortOrder, StructuredContentTableSortType } from "./structured-content";

export interface IStructuredContentTableColumnSortConfig {
	sortOrder?: StructuredContentTableSortOrder;
	sortType?: StructuredContentTableSortType;
	sortable?: boolean;
}
