import type { StructuredContentPlacementType } from "./structured-content-placement-type";
import type { StructuredContentRenderer } from "./structured-content-renderer";

/** Model-owned fields; context bindings are a separate related model. */
export interface IStructuredContentPlacement {
	id: string;
	versionId: string;
	type: StructuredContentPlacementType;
	label: string;
	renderer: StructuredContentRenderer;
	host: string | null;
	slot: string | null;
	path: string | null;
	area: string | null;
	order: number;
	default: boolean;
	allowSwitching: boolean;
	countBinding: string | null;
	countField: string | null;
}
