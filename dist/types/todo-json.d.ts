export type TodoJsonPrimitive = boolean | number | string | null;
export type TodoJsonValue = TodoJsonPrimitive | TodoJsonObject | TodoJsonValue[];
export interface TodoJsonObject {
	[key: string]: TodoJsonValue;
}
