import type { IStructuredContentTagValue } from "./structured-content-tag-value";
import type { IStructuredContentDefaultAvatarValue } from "./structured-content-default-avatar-value";
import type { IStructuredContentTableSelectFilter } from "./structured-content-table-select-filter";
import type { IStructuredContentTableDateRangeFilter } from "./structured-content-table-date-range-filter";
import type { IStructuredContentTableDefaultAvatarColumn } from "./structured-content-table-default-avatar-column";
import type { IStructuredContentTableBooleanColumn } from "./structured-content-table-boolean-column";
import type { IStructuredContentTableDateColumn } from "./structured-content-table-date-column";
import type { IStructuredContentTableDateTimeColumn } from "./structured-content-table-date-time-column";
import type { IStructuredContentTableLinkColumn } from "./structured-content-table-link-column";
import type { IStructuredContentTableNumberColumn } from "./structured-content-table-number-column";
import type { IStructuredContentTableTagColumn } from "./structured-content-table-tag-column";
import type { IStructuredContentTableTextColumn } from "./structured-content-table-text-column";
import type { IStructuredContentTableTimeColumn } from "./structured-content-table-time-column";
import type { IStructuredContentCollapseNode } from "./structured-content-collapse-node";
import type { IStructuredContentDefaultAvatarNode } from "./structured-content-default-avatar-node";
import type { IStructuredContentSpaceNode } from "./structured-content-space-node";
import type { IStructuredContentTextNode } from "./structured-content-text-node";
import type { IStructuredContentTagNode } from "./structured-content-tag-node";
import type { IStructuredContentLinkNode } from "./structured-content-link-node";
import type { IStructuredContentTableNode } from "./structured-content-table-node";
import type { IStructuredContentLinkValue } from "./structured-content-link-value";

export type StructuredContentTextVariant = "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "PARAGRAPH" | "TEXT";
export type StructuredContentLinkVariant = "BUTTON" | "LINK";
export type StructuredContentTableColumnType =
	| "BOOLEAN"
	| "DATE"
	| "DATETIME"
	| "DEFAULT_AVATAR"
	| "LINK"
	| "NUMBER"
	| "TAG"
	| "TEXT"
	| "TIME";
export type StructuredContentTableSortType = "date" | "number" | "string";
export type StructuredContentTableToolbarFilterType = "DATE_RANGE" | "SELECT";
export type StructuredContentLayoutWidth = "auto" | "full" | "half" | "third";
export type StructuredContentLayoutAlign = "center" | "end" | "start";
export type StructuredContentLayoutSpacing = "lg" | "md" | "none" | "sm";
export type StructuredContentTagTone =
	| "blue"
	| "cyan"
	| "danger"
	| "default"
	| "geekblue"
	| "gold"
	| "green"
	| "info"
	| "lime"
	| "magenta"
	| "orange"
	| "pink"
	| "purple"
	| "red"
	| "success"
	| "volcano"
	| "warning"
	| "yellow";

export type IStructuredContentTableToolbarFilter =
	| IStructuredContentTableDateRangeFilter
	| IStructuredContentTableSelectFilter;

export type StructuredContentTableSortOrder = "asc" | "desc";

export type IStructuredContentTableColumn =
	| IStructuredContentTableBooleanColumn
	| IStructuredContentTableDateColumn
	| IStructuredContentTableDateTimeColumn
	| IStructuredContentTableDefaultAvatarColumn
	| IStructuredContentTableLinkColumn
	| IStructuredContentTableNumberColumn
	| IStructuredContentTableTagColumn
	| IStructuredContentTableTextColumn
	| IStructuredContentTableTimeColumn;

export type IStructuredContentNode =
	| IStructuredContentCollapseNode
	| IStructuredContentDefaultAvatarNode
	| IStructuredContentLinkNode
	| IStructuredContentSpaceNode
	| IStructuredContentTagNode
	| IStructuredContentTableNode
	| IStructuredContentTextNode;

export type StructuredContentPrimitiveValue = boolean | number | string | null;
export type StructuredContentAvatarValue = IStructuredContentDefaultAvatarValue;
export type StructuredContentTaggableValue = IStructuredContentTagValue | StructuredContentPrimitiveValue;
export type IStructuredContentTableRow = Record<
	string,
	IStructuredContentLinkValue | StructuredContentAvatarValue | StructuredContentTaggableValue
>;
export type StructuredContentDataValue =
	| IStructuredContentDefaultAvatarValue
	| IStructuredContentLinkValue
	| IStructuredContentTagValue
	| IStructuredContentTableRow[]
	| StructuredContentPrimitiveValue;
export type IStructuredContentData = Record<string, StructuredContentDataValue>;
