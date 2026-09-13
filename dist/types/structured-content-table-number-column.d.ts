import type { IStructuredContentTableColumnSortConfig } from "./structured-content-table-column-sort-config";
import type { IStructuredContentTableNamedColumnBase } from "./structured-content-table-named-column-base";

export type StructuredContentTableNumberFormat = "PERCENTAGE";

export interface IStructuredContentTableNumberColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig & {
		format?: StructuredContentTableNumberFormat;
		maximumFractionDigits?: number;
		minimumFractionDigits?: number;
		useGrouping?: boolean;
	};
	type: "NUMBER";
}
