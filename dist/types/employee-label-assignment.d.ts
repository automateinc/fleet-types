export interface IEmployeeLabelAssignment {
	id: string;
	createdAt: string;
	updatedAt?: string;

	labelId: string;
	employeeId: string;

	systemAssigned: boolean;
	metadata?: any;
}
