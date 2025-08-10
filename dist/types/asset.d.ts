export interface IAsset {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	typeId: string;
	categoryId: string;

	quantity: number;

	employeeId?: string;
	userId?: string;
	siteId?: string;
	positionId?: string;
	phoneLineCommitmentId?: string;
	metadata?: any;
}
