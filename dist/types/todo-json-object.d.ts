import type { TodoJsonValue } from "./todo-json-value";

export interface TodoJsonObject {
	[key: string]: TodoJsonValue;
}
