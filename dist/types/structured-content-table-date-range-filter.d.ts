import type { IStructuredContentTableToolbarFilterBase } from "./structured-content-table-toolbar-filter-base";
import type { IStructuredContentDateRangeFilterConstraints } from "./structured-content-date-range-filter-constraints";
import type { IStructuredContentDateRangeFilterInitialValue } from "./structured-content-date-range-filter-initial-value";

export interface IStructuredContentTableDateRangeFilter extends IStructuredContentTableToolbarFilterBase {
	config?: {
		constraints?: IStructuredContentDateRangeFilterConstraints;
		initialValue?: IStructuredContentDateRangeFilterInitialValue;
	};
	type: "DATE_RANGE";
}
