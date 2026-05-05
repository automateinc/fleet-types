export interface IClientStatusCheckRequirementCondition {
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	order?: number;
	type?: string;
	operator?: string;
	categoryId: string;
	categoryFieldId?: string;
	compareValueBoolean?: boolean;
	compareValueDate?: string;
	compareValueNumber?: number;
	compareValueString?: string;
	metadata?: any;
}