export interface IRegion {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	countryCode: string;
	configs: IRegionConfig[];
}

export interface IRegionConfig {
	id: string;
	name: string;
	value: string;
	type: string;
}
