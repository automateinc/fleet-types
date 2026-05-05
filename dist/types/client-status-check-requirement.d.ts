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

export interface IClientStatusCheckRequirementConditionGroup {
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	order?: number;
	operator?: string;
	conditions?: IClientStatusCheckRequirementCondition[];
	metadata?: any;
}

export interface IClientStatusCheckRequirement {
	id: string;
	createdAt: string;
	updatedAt: string;

	optional: boolean;
	order: number;
	tooltip?: string;
	type?: string;
	operator?: string;

	statusCheckId: string;
	categoryId: string;

	categoryFieldId?: string;
	compareValueBoolean?: boolean;
	compareValueDate?: string;
	compareValueNumber?: number;
	compareValueString?: string;

	metadata?: any;
}
