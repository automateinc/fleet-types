export interface StructuredContentPlacement {
	type: "PAGE" | "TAB" | "SECTION" | "LAYOUT";
	area?: string;
	path?: string;
	host?: string;
	slot?: string;
	order?: number;
	count?: { binding: string; field: string };
	label: string;
	default: boolean;
	allowSwitching: boolean;
	renderer: "STRUCTURED" | "NATIVE";
	contextBindings: Record<string, string>;
}
