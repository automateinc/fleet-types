import { IRequestCategoryField } from ".";

export interface IRequestAction {
	createdAt: string;
	updatedAt: string;
	id: string;
	categoryId: string;
	name: string;
	type: "VERIFICATION" | "APPROVAL" | "REJECTION" | "CREATION";
	operation: "HTTP" | "GENERATE_DOCUMENT" | "APPLY_SIGNATURE";
	config: Record<string, any>;
	order: number;
	fields: IRequestCategoryField[];
	metadata?: any;
}
