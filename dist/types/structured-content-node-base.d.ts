import type { IStructuredContentNodeLayout } from "./structured-content-node-layout";

export interface IStructuredContentNodeBase {
	id: string;
	layout?: IStructuredContentNodeLayout;
	type: "COLLAPSE" | "DEFAULT_AVATAR" | "LINK" | "SPACE" | "TABLE" | "TAG" | "TEXT";
}
