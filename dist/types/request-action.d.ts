import { IRequestCategoryField } from ".";

export interface IRequestAction {
	createdAt: string;
	updatedAt: string;
	id: string;
	categoryId: string;
	name: string;
	type: "VERIFICATION" | "APPROVAL" | "REJECTION" | "CREATION";
	operation: "HTTP";
	config: Record<string, any>;
	order: number;
	fields: IRequestCategoryField[];
}
