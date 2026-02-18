export interface IClientRequestAction {
	id: string;
	createdAt: Date;
	updatedAt: Date;

	name: string;
	operation: "HTTP";
	type: "VERIFICATION" | "APPROVAL" | "REJECTION" | "CREATION";

	config: Record<string, any>;
	order: number;

	metadata: any;
}
