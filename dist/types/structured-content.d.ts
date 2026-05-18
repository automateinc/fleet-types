export type StructuredContentTextVariant = "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "PARAGRAPH" | "TEXT";
export type StructuredContentLinkVariant = "BUTTON" | "LINK";
export type StructuredContentTableColumnType = "BOOLEAN" | "DATE" | "DATETIME" | "LINK" | "NUMBER" | "TAG" | "TEXT" | "TIME";
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
	filters?: IStructuredContentTableToolbarFilter[];
	search?: boolean;
}

export interface IStructuredContentTablePagination {
	pageSize?: number;
}

export interface IStructuredContentTableColumn {
	id: string;
	name: string;
	sortType?: StructuredContentTableSortType;
	sortable?: boolean;
	type: StructuredContentTableColumnType;
}

export interface IStructuredContentNodeBase {
	id: string;
	layout?: IStructuredContentNodeLayout;
	type: "COLLAPSE" | "FILES" | "LINK" | "SPACE" | "TABLE" | "TAG" | "TEXT";
}

export interface IStructuredContentCollapseNode extends IStructuredContentNodeBase {
	children?: IStructuredContentNode[];
	config?: {
		title?: string;
	};
	type: "COLLAPSE";
}

export interface IStructuredContentFilesNode extends IStructuredContentNodeBase {
	config?: {
		source?: "HISTORY";
	};
	type: "FILES";
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
	| IStructuredContentFilesNode
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
export type StructuredContentTaggableValue = IStructuredContentTagValue | StructuredContentPrimitiveValue;
export type IStructuredContentTableRow = Record<string, IStructuredContentLinkValue | StructuredContentTaggableValue>;
export type StructuredContentDataValue =
	| IStructuredContentLinkValue
	| IStructuredContentTagValue
	| IStructuredContentTableRow[]
	| StructuredContentPrimitiveValue;
export type IStructuredContentData = Record<string, StructuredContentDataValue>;

export interface IStructuredContent {
	createdAt: string;
	data: IStructuredContentData;
	id: string;
	metadata?: unknown;
	relation: string;
	relationId: number | string;
	structure: IStructuredContentNode[];
	updatedAt?: string;
}