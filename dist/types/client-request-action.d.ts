export interface IClientRequestAction {
	id: string;
	createdAt: Date;
	updatedAt: Date;

	name: string;
	operation: "HTTP" | "FUNCTION";
	type: "VERIFICATION" | "APPROVAL" | "REJECTION" | "CREATION";

	categoryId: string;

	config: Record<string, any>;
	order: number;

	metadata: any;
}
