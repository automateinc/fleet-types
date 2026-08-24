export interface ITodoAssignee {
	id: string;
	createdAt: string;
	todoId: string;
	userId?: string;
	employeeId?: string;
	metadata?: Record<string, unknown>;
}
