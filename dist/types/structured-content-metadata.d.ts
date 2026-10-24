import type { StructuredJson } from "./structured-json";

/** Additional annotations only. Placement and presentation settings are separate records. */
export type StructuredContentMetadata = Record<string, StructuredJson | undefined>;
