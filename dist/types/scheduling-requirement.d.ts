import type { IEmployeeGroup } from "./employee-group";
import type { IEmployeeLabel } from "./employee-label";
import { IGender } from "./gender";
import type { IRole } from "./role";

export interface ISchedulingRequirement {
	id: string;
	createdAt: string;
	updatedAt?: string;

	strength: "HARD" | "SOFT";
	gender?: IGender | null;

	clientId?: string | null;
	positionVersionId?: string | null;
	shiftId?: string | null;
	clientQuotationPositionVersionId?: string | null;

	roles?: IRole[];
	employeeGroups?: IEmployeeGroup[];
	labels?: IEmployeeLabel[];
}

export interface ISchedulingRequirementSelection {
	roleIds: string[];
	employeeGroupIds: string[];
	labelIds: string[];
	gender?: IGender | null;
}

export interface ISchedulingRequirementsInput {
	hard: ISchedulingRequirementSelection;
	soft: ISchedulingRequirementSelection;
}

export type SchedulingRequirementScope = "CLIENT" | "POSITION" | "SHIFT";
export type SchedulingRequirementKind = "ROLE" | "EMPLOYEE_GROUP" | "GENDER" | "LABEL";

export interface ISchedulingRequirementFailure {
	scope: SchedulingRequirementScope;
	kind: SchedulingRequirementKind;
	expected: string[];
}

export interface ISchedulingRequirementMatch {
	eligible: boolean;
	hardMatched: number;
	hardTotal: number;
	softMatched: number;
	softTotal: number;
	hardFailures: ISchedulingRequirementFailure[];
}
