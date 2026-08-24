import type { TodoJsonValue } from "./todo-json-value";

export interface ITodoListFieldEntry {
	key: string;
	label: string;
	visible: boolean;
	enabled: boolean;
	showInList: boolean;
	order: number;
	type: "system" | "custom";
	fieldId?: string;
	config?: Record<string, TodoJsonValue>;
}
