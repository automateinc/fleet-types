export type RequestDocumentValueSource = "EMPLOYEE" | "COMPANY" | "REQUEST" | "CONTRACT" | "FIXED" | "CODE";

export interface IRequestDocumentMapping {
	id: string;
	revisionId: string;

	tag: string;
	source: RequestDocumentValueSource;
	path: string[];
	value: string | null;
	fallback: string | null;
	format: string | null;
}
