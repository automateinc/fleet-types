export interface IClientStatusCheckRequirement {
	id: string;
	createdAt: string;
	updatedAt: string;

	optional: boolean;
	order: number;
	tooltip?: string;

	statusCheckId: string;
	categoryId: string;

	metadata?: any;
}
