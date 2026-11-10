import type { StructuredGridColumns } from "./structured-grid-columns";
import type { StructuredViewAction } from "./structured-view-action";
import type { StructuredViewCondition, StructuredViewValue } from "./structured-view-condition";

export interface StructuredPresentation {
	alertStyle?: "outline" | "filled";
	items?: StructuredViewValue;
	avatarSize?: number;
	justify?: "start" | "end" | "center" | "space-between";
	header?: StructuredPresentation[];
	extra?: StructuredPresentation[];
	itemKey?: string;
	size?: "small" | "default";
	minColumnWidth?: number;
	whiteSpace?: "normal" | "pre-line";
	buttonType?: "default" | "link" | "text" | "primary";
	countButton?: {
		activeWhen: StructuredViewCondition;
		colors: Record<"light" | "dark", { primary: string; hover: string; text: string; textHover: string }>;
	};
	fontSize?: number;
	icon?: "location" | "check-circle" | "warning-circle" | "close-circle" | "calendar";
	className?: string;
	direction?: "row" | "column" | "inline";
	wrap?: boolean;
	padding?: number;
	paddingBlock?: number;
	strong?: boolean;
	showInfo?: boolean;
	maximumFractionDigits?: number;
	minimumFractionDigits?: number;
	headingLevel?: 1 | 2 | 3 | 4 | 5;
	dateFormat?: string;
	type:
		| "ALERT"
		| "TEXT"
		| "TAG"
		| "PROGRESS"
		| "LINK"
		| "BUTTON"
		| "REPEAT"
		| "STACK"
		| "GRID"
		| "CARD"
		| "STATISTIC"
		| "AVATAR"
		| "COLLAPSE"
		| "EMPTY";
	visibleWhen?: StructuredViewCondition;
	value?: StructuredViewValue;
	tagColor?:
		| "default"
		| "red"
		| "orange"
		| "gold"
		| "green"
		| "blue"
		| "purple"
		| "cyan"
		| "geekblue"
		| "magenta"
		| "volcano"
		| "lime";
	text?: StructuredViewValue[];
	heading?: boolean;
	description?: StructuredViewValue;
	descriptionLabel?: string;
	format?: "number" | "percent" | "date" | "datetime" | "duration";
	tone?: "default" | "secondary" | "success" | "warning" | "danger" | "info";
	rules?: {
		when: StructuredViewCondition;
		tone?: "default" | "secondary" | "success" | "warning" | "danger" | "info";
		className?: string;
		icon?: StructuredPresentation["icon"];
	}[];
	href?: StructuredViewValue;
	action?: StructuredViewAction;
	children?: StructuredPresentation[];
	gap?: number;
	columns?: StructuredGridColumns;
	align?: "start" | "center" | "end";
}
