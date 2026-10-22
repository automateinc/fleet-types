import type { StructuredQueryParameterValue } from "./structured-query-parameter-value";
import type { StructuredViewCondition } from "./structured-view-condition";

export interface StructuredViewControl {
	allowEmpty?: boolean;
	allowClear?: boolean;
	showLabel?: boolean;
	display?: "picker" | "range" | "radio" | "segmented" | "input" | "select" | "cards";
	defaultSelection?: "first";
	labelStrong?: boolean;
	icon?: "calendar";
	minWidth?: number;
	resetControls?: string[];
	resetUrlKeys?: string[];
	presets?: ("thisMonth" | "lastMonth" | "last7Days")[];
	visibleWhen?: StructuredViewCondition;
	key: string;
	label: string;
	type: "TEXT" | "NUMBER" | "SELECT" | "DATE" | "DATE_RANGE" | "WEEK" | "MONTH" | "BOOLEAN";
	defaultValue?: StructuredQueryParameterValue;
	multiple?: boolean;
	currentPeriod?: boolean;
	dateFormat?: string;
	disableFuture?: boolean;
	help?: string;
	maxSpanMonths?: number;
	urlKey?: string;
	urlEncoding?: "json" | "text" | "csv";
	debounceMs?: number;
	options?: { label: string; value: string | number | boolean }[];
	optionsBinding?: string;
	optionReference?: "company" | "employee";
	boundsBinding?: string;
}
