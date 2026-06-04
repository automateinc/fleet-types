export interface ICallEntity {
	id: string;
	createdAt: string;
	updatedAt?: string;

	number: string;

	type: "BUILDING" | "CLIENT" | "EMPLOYEE" | "OTHER" | "USER" | null;

	employeeId: string | null;
	buildingId: string | null;
	clientId: string | null;
	userId: string | null;

	otherCaller?: string | null;
	metadata?: any;
}
