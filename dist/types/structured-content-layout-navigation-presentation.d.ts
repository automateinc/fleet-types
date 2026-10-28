import type { StructuredContentNavigationStyle } from "./structured-content-navigation-style";

export interface IStructuredContentLayoutNavigationPresentation {
	id: string;
	versionId: string;
	nodeId: string;
	style: StructuredContentNavigationStyle;
	columns: number;
}
