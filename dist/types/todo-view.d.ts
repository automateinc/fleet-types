import type { TodoJsonObject, TodoJsonValue } from "./todo-json";

export interface ITodoView {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	type: TodoViewType;

	spaceId: string;
	listId?: string;

	createdById: string;

	isShared: boolean;
	isDefault: boolean;

	filters?: TodoJsonValue;
	sortConfig?: TodoJsonValue;
	groupBy?: string;
	columnConfig?: TodoJsonValue;
	viewConfig?: TodoJsonValue;

	sortOrder: number;

	metadata?: Record<string, unknown>;
}

export type TodoViewType = "LIST" | "BOARD" | "GANTT" | "TIMELINE" | "TABLE" | "CALENDAR";

export interface ITodoDashboard {
	id: string;
	createdAt: string;
	updatedAt?: string;

	spaceId: string;
	listId?: string;

	config: TodoJsonObject;
}

export interface ITodoDashboardWidget {
	id: string;
	createdAt: string;
	updatedAt?: string;

	dashboardId: string;
	type: TodoDashboardWidgetType;
	config: TodoJsonObject;

	x: number;
	y: number;
	w: number;
	h: number;
}

export type TodoDashboardWidgetType =
	| "STATUS_BREAKDOWN"
	| "PRIORITY_BREAKDOWN"
	| "ASSIGNEE_WORKLOAD"
	| "DUE_DATE_CALENDAR"
	| "RECENT_ACTIVITY"
	| "COMPLETION_TREND"
	| "OVERDUE_TODOS"
	| "BURNDOWN_CHART"
	| "TAG_DISTRIBUTION"
	| "VELOCITY"
	| "STATS_CARD";

export interface ITodoTimeEntry {
	id: string;
	createdAt: string;
	updatedAt?: string;

	todoId: string;
	userId: string;

	startedAt: string;
	stoppedAt?: string;
	duration?: number;

	description?: string;

	metadata?: Record<string, unknown>;
}
