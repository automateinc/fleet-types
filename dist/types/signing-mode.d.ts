export interface ISigningMode {
	createdAt: Date;
	id: string;
	updatedAt: Date;

	userId: string;
	employeeId?: string;
	metadata?: any;
}
