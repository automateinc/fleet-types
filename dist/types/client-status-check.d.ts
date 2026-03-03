export interface IClientStatusCheck {
	id: string;
	createdAt: string;
	updatedAt: string;

	fromStatusId: string;
	targetStatusId: string;

	metadata?: any;
}
