import type { TodoDependencyType } from "./todo-dependency-type";

export interface ITodoDependency {
	id: string;
	createdAt: string;
	todoId: string;
	dependsOnId: string;
	type: TodoDependencyType;
	createdById: string;
}
