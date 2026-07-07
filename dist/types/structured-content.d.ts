import { IModel } from "./models";

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

export interface IStructuredContentTagValue {
	color?: string;
	label: string;
	tone?: StructuredContentTagTone;
}

export interface IStructuredContentDefaultAvatarValue {
	inactive?: boolean;
	onLeave?: boolean;
	src: string;
}

export interface IStructuredContentNodeLayout {
	align?: StructuredContentLayoutAlign;
	gap?: StructuredContentLayoutSpacing;
	hidden?: boolean;
	marginBottom?: StructuredContentLayoutSpacing;
	marginTop?: StructuredContentLayoutSpacing;
	paddingX?: StructuredContentLayoutSpacing;
	paddingY?: StructuredContentLayoutSpacing;
	width?: StructuredContentLayoutWidth;
}

export interface IStructuredContentTableToolbarFilterBase {
	columnKey: string;
}

export interface IStructuredContentTableSelectFilter extends IStructuredContentTableToolbarFilterBase {
	config?: {
		initialValue?: string;
	};
	type?: "SELECT";
}

export interface IStructuredContentDateRangeFilterConstraints {
	disableFuture?: boolean;
	disablePast?: boolean;
	disabledDates?: string[];
	disabledWeekdays?: number[];
	maxDate?: string;
	minDate?: string;
}

export interface IStructuredContentDateRangeFilterInitialValue {
	endDate?: string;
	startDate?: string;
}

export interface IStructuredContentTableDateRangeFilter extends IStructuredContentTableToolbarFilterBase {
	config?: {
		constraints?: IStructuredContentDateRangeFilterConstraints;
		initialValue?: IStructuredContentDateRangeFilterInitialValue;
	};
	type: "DATE_RANGE";
}

export type IStructuredContentTableToolbarFilter =
	| IStructuredContentTableDateRangeFilter
	| IStructuredContentTableSelectFilter;

export interface IStructuredContentTableToolbar {
	advancedFilters?: boolean;
	exportCsv?: boolean;
	filters?: IStructuredContentTableToolbarFilter[];
	search?: boolean;
}

export type StructuredContentTableSortOrder = "asc" | "desc";

export interface IStructuredContentTableColumnSortConfig {
	sortOrder?: StructuredContentTableSortOrder;
	sortType?: StructuredContentTableSortType;
	sortable?: boolean;
}

export interface IStructuredContentTablePagination {
	pageSize?: number;
}

export interface IStructuredContentTableColumnBase {
	id: string;
	type: StructuredContentTableColumnType;
}

export interface IStructuredContentTableNamedColumnBase extends IStructuredContentTableColumnBase {
	name: string;
}

export interface IStructuredContentTableDefaultAvatarColumn extends IStructuredContentTableColumnBase {
	config?: {
		size?: number;
	};
	type: "DEFAULT_AVATAR";
}

export interface IStructuredContentTableBooleanColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "BOOLEAN";
}

export interface IStructuredContentTableDateColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "DATE";
}

export interface IStructuredContentTableDateTimeColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "DATETIME";
}

export interface IStructuredContentTableLinkColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "LINK";
}

export interface IStructuredContentTableNumberColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "NUMBER";
}

export interface IStructuredContentTableTagColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "TAG";
}

export interface IStructuredContentTableTextColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "TEXT";
}

export interface IStructuredContentTableTimeColumn extends IStructuredContentTableNamedColumnBase {
	config?: IStructuredContentTableColumnSortConfig;
	type: "TIME";
}

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

export interface IStructuredContentNodeBase {
	id: string;
	layout?: IStructuredContentNodeLayout;
	type: "COLLAPSE" | "DEFAULT_AVATAR" | "LINK" | "SPACE" | "TABLE" | "TAG" | "TEXT";
}

export interface IStructuredContentCollapseNode extends IStructuredContentNodeBase {
	children?: IStructuredContentNode[];
	config?: {
		title?: string;
	};
	type: "COLLAPSE";
}

export interface IStructuredContentDefaultAvatarNode extends IStructuredContentNodeBase {
	config?: {
		size?: number;
	};
	type: "DEFAULT_AVATAR";
}

export interface IStructuredContentSpaceNode extends IStructuredContentNodeBase {
	children?: IStructuredContentNode[];
	type: "SPACE";
}

export interface IStructuredContentTextNode extends IStructuredContentNodeBase {
	config?: {
		variant?: StructuredContentTextVariant;
	};
	type: "TEXT";
}

export interface IStructuredContentTagNode extends IStructuredContentNodeBase {
	config?: {
		tone?: StructuredContentTagTone;
	};
	type: "TAG";
}

export interface IStructuredContentLinkNode extends IStructuredContentNodeBase {
	config?: {
		variant?: StructuredContentLinkVariant;
	};
	type: "LINK";
}

export interface IStructuredContentTableNode extends IStructuredContentNodeBase {
	config?: {
		columns?: IStructuredContentTableColumn[];
		pagination?: IStructuredContentTablePagination;
		toolbar?: IStructuredContentTableToolbar;
	};
	type: "TABLE";
}

export type IStructuredContentNode =
	| IStructuredContentCollapseNode
	| IStructuredContentDefaultAvatarNode
	| IStructuredContentLinkNode
	| IStructuredContentSpaceNode
	| IStructuredContentTagNode
	| IStructuredContentTableNode
	| IStructuredContentTextNode;

export interface IStructuredContentLinkValue {
	href: string;
	target?: string;
	title: string;
}

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

export interface IStructuredContent {
	createdAt: string;
	data: IStructuredContentData;
	id: string;
	key: string;
	metadata?: Record<string, any>;
	rawData: unknown;
	relation: IModel;
	relationId: string;
	structure: IStructuredContentNode[];
	updatedAt?: string;
}
