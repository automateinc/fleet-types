export type StructuredContentTextVariant = "H1" | "H2" | "H3" | "H4" | "H5" | "H6" | "PARAGRAPH" | "TEXT";
export type StructuredContentLinkVariant = "BUTTON" | "LINK";
export type StructuredContentTableColumnType = "BOOLEAN" | "DATE" | "DATETIME" | "LINK" | "NUMBER" | "TEXT" | "TIME";

export interface IStructuredContentTableColumn {
	id: string;
	name: string;
	type: StructuredContentTableColumnType;
}

export interface IStructuredContentNodeBase {
	id: string;
	type: "LINK" | "SPACE" | "TABLE" | "TEXT";
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

export interface IStructuredContentLinkNode extends IStructuredContentNodeBase {
	config?: {
		variant?: StructuredContentLinkVariant;
	};
	type: "LINK";
}

export interface IStructuredContentTableNode extends IStructuredContentNodeBase {
	config?: {
		columns?: IStructuredContentTableColumn[];
	};
	type: "TABLE";
}

export type IStructuredContentNode =
	| IStructuredContentLinkNode
	| IStructuredContentSpaceNode
	| IStructuredContentTableNode
	| IStructuredContentTextNode;

export interface IStructuredContentLinkValue {
	href: string;
	target?: string;
	title: string;
}

export type StructuredContentPrimitiveValue = boolean | number | string | null;
export type IStructuredContentTableRow = Record<string, IStructuredContentLinkValue | StructuredContentPrimitiveValue>;
export type StructuredContentDataValue =
	| IStructuredContentLinkValue
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