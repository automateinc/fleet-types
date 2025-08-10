import { IRequestCategoryField } from "./request-category-field";

export interface IRequestCategory {
	id: string;
	name: string;
	typeId: string;
	fields: IRequestCategoryField[];
	requiresVerification: boolean;
	requiresApproval: boolean;
	createdAt: string;
	updatedAt: string;
	allowedRequesters: Array<"USER" | "EMPLOYEE">;
	metadata?: any;
}
