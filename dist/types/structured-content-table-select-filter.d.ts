import type { IStructuredContentTableToolbarFilterBase } from "./structured-content-table-toolbar-filter-base";

export interface IStructuredContentTableSelectFilter extends IStructuredContentTableToolbarFilterBase {
	config?: {
		initialValue?: string;
	};
	type?: "SELECT";
}
