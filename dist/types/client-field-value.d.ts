export interface IClientFieldValue {
	createdAt: string;
	updatedAt: string;
	id: string;

	clientId: string;
	clientFieldId: string;
	requestCategoryFieldId: string;

	value: any;

	metadata?: any;
}
