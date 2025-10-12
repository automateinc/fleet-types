export interface IBuilding {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	address: any;
	geolocation: {
		lat: number;
		lng: number;
	};
	status: "ACTIVE" | "INACTIVE";
	isInitial: boolean;
	companyId: string;
	zoneId: string;
	metadata?: any;
}
