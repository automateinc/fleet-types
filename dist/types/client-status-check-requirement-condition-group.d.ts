import { IClientStatusCheckRequirementCondition } from "./client-status-check-requirement-condition";

export interface IClientStatusCheckRequirementConditionGroup {
	id?: string;
	createdAt?: string;
	updatedAt?: string;
	order?: number;
	operator?: string;
	conditions?: IClientStatusCheckRequirementCondition[];
	metadata?: any;
}