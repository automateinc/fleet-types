export interface IStructuredContentDateRangeFilterConstraints {
	disableFuture?: boolean;
	disablePast?: boolean;
	disabledDates?: string[];
	disabledWeekdays?: number[];
	maxDate?: string;
	minDate?: string;
}
