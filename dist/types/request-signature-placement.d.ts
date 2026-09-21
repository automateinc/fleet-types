export interface IRequestSignaturePlacement {
	id: string;
	revisionId: string;

	pages: string;
	/** Fractions of the visible, rotation-adjusted page, measured from its top left. */
	x: number;
	y: number;
	width: number;
	height: number;
}
