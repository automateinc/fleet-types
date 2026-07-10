import type { IStructuredContentTableToolbarFilter } from "./structured-content";

export interface IStructuredContentTableToolbar {
	advancedFilters?: boolean;
	exportCsv?: boolean;
	filters?: IStructuredContentTableToolbarFilter[];
	search?: boolean;
}
