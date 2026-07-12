import type { TodoJsonObject } from "./todo-json-object";

export type TodoJsonPrimitive = boolean | number | string | null;
export type TodoJsonValue = TodoJsonPrimitive | TodoJsonObject | TodoJsonValue[];
