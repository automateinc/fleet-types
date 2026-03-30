export interface IClientStatusCheckRequirement {
	id: string;
	createdAt: string;
	updatedAt: string;

	optional: boolean;
	order: number;
	tooltip?: string;

	statusCheckId: string;
	categoryId: string;

	categoryFieldId?: string;
	
	optionalWhenCategoryId?: string;
	optionalWhenCategoryFieldId?: string;

	metadata?: any;
}
