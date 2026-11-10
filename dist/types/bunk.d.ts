export interface IBunk {
	id: string;
	createdAt: string;
	updatedAt: string | null;
	buildingId: string;
	addressFlatNumber: string | null;
	employeeId: string | null;
	metadata?: any;
}
