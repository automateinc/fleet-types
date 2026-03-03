export interface IClientStatusCheckRequirement {
	id: string;
	createdAt: string;
	updatedAt: string;

	optional: boolean;
	order: number;

	statusCheckId: string;
	categoryId: string;

	metadata?: any;
}
