export interface IEmployeeEvent {
	id: string;
	createdAt: Date;
	updatedAt: Date;

	employeeId: string;

	type: string;
	metadata: any;
}
