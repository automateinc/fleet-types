export interface IPhoneLineCommitment {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	amount: number;
	dueUntil: string;

	lineId: string;
	metadata?: any;
}
