export interface ICoords {
	lat: number;
	lng: number;
	radius?: number;
	coveragePath?: { lat: number; lng: number }[];
}
