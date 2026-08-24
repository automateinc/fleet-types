import type {
	StructuredContentLayoutAlign,
	StructuredContentLayoutSpacing,
	StructuredContentLayoutWidth,
} from "./structured-content";

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
