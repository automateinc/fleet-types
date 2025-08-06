export interface IEmployeeEvent {
	id: string;
	createdAt: string;
	updatedAt: string;

	employeeId: string;

	type: string;
	metadata?: any;
}
