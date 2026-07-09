export interface ITodoListFieldConfig {
	id: string;
	createdAt: string;
	updatedAt?: string;

	listId: string;

	fields: ITodoListFieldEntry[];
}

export interface ITodoListFieldEntry {
	key: string;
	label: string;
	visible: boolean;
	order: number;
	type: "system" | "custom";
	fieldId?: string; // for custom fields
	config?: Record<string, any>;
}

/** Default system fields available for list configuration */
export const SYSTEM_FIELDS: Array<{ key: string; label: string; alwaysVisible?: boolean }> = [
	{ alwaysVisible: true, key: "title", label: "Task Name" },
	{ key: "description", label: "Description" },
	{ key: "statusId", label: "Status" },
	{ key: "priority", label: "Priority" },
	{ key: "assignees", label: "Assignees" },
	{ key: "dueDate", label: "Due Date" },
	{ key: "startDate", label: "Start Date" },
	{ key: "timeEstimate", label: "Time Estimate" },
	{ key: "timeTracked", label: "Time Tracked" },
	{ key: "createdAt", label: "Created Date" },
	{ key: "updatedAt", label: "Updated Date" },
	{ key: "closedAt", label: "Closed Date" },
	{ key: "createdBy", label: "Created By" },
	{ key: "closedBy", label: "Closed By" },
	{ key: "id", label: "Task ID" },
	{ key: "taskType", label: "Task Type" },
	{ key: "parentId", label: "Parent Task" },
	{ key: "children", label: "Subtasks" },
	{ key: "checklists", label: "Checklist" },
	{ key: "tags", label: "Tags" },
	{ key: "watchers", label: "Watchers" },
	{ key: "dependencies", label: "Dependencies" },
	{ key: "sprintPoints", label: "Sprint Points" },
	{ key: "recurringSettings", label: "Recurring Settings" },
	{ key: "estimatedHours", label: "Estimated Hours" },
];
