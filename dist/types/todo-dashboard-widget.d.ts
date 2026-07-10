import type { TodoDashboardWidgetType } from "./todo-dashboard-widget-type";
import type { TodoJsonObject } from "./todo-json-object";

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
