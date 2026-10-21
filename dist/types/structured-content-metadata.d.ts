import type { StructuredContentPlacement } from "./structured-content-placement";
import type { StructuredJson } from "./structured-json";

export type StructuredContentMetadata = { placement?: StructuredContentPlacement } & Record<
	string,
	StructuredJson | undefined
>;
