import type { StructuredPresentation } from "./structured-presentation";
import type { StructuredViewAction } from "./structured-view-action";
import type { StructuredViewCondition } from "./structured-view-condition";

export interface StructuredViewColumn {
	headerPath?: string[];
	visibleWhen?: StructuredViewCondition;
	content?: StructuredPresentation;
	caption?: StructuredPresentation;
	showAvatar?: boolean;
	linkTarget?: "_self" | "_blank";
	width?: number;
	ellipsis?: boolean;
	fixed?: "left" | "right";
	align?: "left" | "center" | "right";

	action?: StructuredViewAction;
	key: string;
	title?: string;
	sortable?: boolean;
	divisor?: number;
	format?: "text" | "number" | "datetime" | "date" | "percent" | "tag";
	useGrouping?: boolean;
	minimumFractionDigits?: number;
	maximumFractionDigits?: number;
	renderer?: string;
	fallbackField?: string;
	dateFormat?: string;
	exportField?: string;
	sortField?: string;
	suffix?: string;
	tagColors?: Record<string, string>;
}
