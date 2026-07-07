export interface ITodoCustomField {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	type: TodoCustomFieldType;

	spaceId: string;

	options?: ITodoCustomFieldOption[];
	defaultValue?: any;

	sortOrder: number;
	required: boolean;

	metadata?: any;
}

export interface ITodoCustomFieldOption {
	label: string;
	color?: string;
	value: string;
}

export type TodoCustomFieldType =
	| "TEXT"
	| "NUMBER"
	| "DATE"
	| "DROPDOWN"
	| "MULTI_DROPDOWN"
	| "CHECKBOX"
	| "EMAIL"
	| "PHONE"
	| "URL"
	| "CURRENCY"
	| "RATING"
	| "PROGRESS";
