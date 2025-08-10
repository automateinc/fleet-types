export interface IEmployeeComment {
	createdAt: Date;
	updatedAt: Date;
	deletedAt: Date;

	id: string;
	userId: string;
	employeeId: string;
	comment: string;
	metadata?: any;
}
