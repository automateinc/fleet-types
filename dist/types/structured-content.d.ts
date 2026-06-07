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
export type StructuredContentTagTone = "danger" | "default" | "info" | "success" | "warning";

export interface IStructuredContentTagValue {
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

export interface IStructuredContentTableToolbarFilter {
	columnKey: string;
	type?: StructuredContentTableToolbarFilterType;
}

export interface IStructuredContentTableToolbar {
	advancedFilters?: boolean;
	exportCsv?: boolean;
	filters?: IStructuredContentTableToolbarFilter[];
	search?: boolean;
}

export interface IStructuredContentTablePagination {
	pageSize?: number;
}

export interface IStructuredContentTableColumn {
	config?: {
		size?: number;
	};
	id: string;
	name?: string;
	sortType?: StructuredContentTableSortType;
	sortable?: boolean;
	type: StructuredContentTableColumnType;
}

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