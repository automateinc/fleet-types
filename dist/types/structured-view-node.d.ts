import type { StructuredAggregateMetric, StructuredAggregateRequest } from "./structured-data-aggregate";
import type { StructuredGridColumns } from "./structured-grid-columns";
import type { StructuredJson } from "./structured-json";
import type { StructuredPresentation } from "./structured-presentation";
import type { StructuredViewAction } from "./structured-view-action";
import type { StructuredViewColumn } from "./structured-view-column";
import type { StructuredViewCondition } from "./structured-view-condition";
import type { StructuredViewControl } from "./structured-view-control";

export interface StructuredAggregateTableNode {
	showSearch?: boolean;
	showFilters?: boolean;
	showExport?: boolean;
	id: string;
	type: "AGGREGATE_TABLE";
	binding: string;
	groupBy: string[];
	metrics: StructuredAggregateMetric[];
	preAggregate?: StructuredAggregateRequest["preAggregate"];
	columns: (StructuredViewColumn & { title: string })[];
	size?: "small" | "middle" | "large";
	searchField?: string;
	sort?: { key: string; direction: "asc" | "desc" }[];
}

export type StructuredViewNode = { visibleWhen?: StructuredViewCondition; size?: "small" | "middle" | "large" } & (
	| {
			id: string;
			type: "QUERY_EXPORT";
			availabilityBinding?: string;
			countField?: string;
			exports: {
				binding: string;
				columns: StructuredViewColumn[];
				fileName: string;
				label: string;
				includeHeader?: boolean;
			}[];
	  }
	| { id: string; type: "MODAL"; title: string; width?: number; children: StructuredViewNode[] }
	| { id: string; type: "PRESENTATION"; content: StructuredPresentation }
	| { id: string; type: "QUERY_PRESENTATION"; binding: string; content: StructuredPresentation }
	| { id: string; type: "BUTTON"; label: string; action: StructuredViewAction }
	| { id: string; type: "QUERY_NOTICE"; binding: string; messageField: string; levelField?: string }
	| { id: string; type: "FILTERS"; gap?: number; layout?: "wrap" | "row"; controls: StructuredViewControl[] }
	| {
			id: string;
			type: "TABS" | "COLLAPSE";
			binding?: string;
			gap?: number;
			urlKey?: string;
			defaultActiveKeys?: string[];
			ghost?: boolean;
			strongHeaders?: boolean;
			tabs: {
				key: string;
				label: string;
				children: StructuredViewNode[];
				extra?: { binding: string; content: StructuredPresentation };
				visibleWhen?: StructuredViewCondition;
			}[];
	  }
	| {
			id: string;
			type: "QUERY_STATISTICS";
			aggregate?: { groupBy: string[]; metrics: StructuredAggregateMetric[] };
			groupHeading?: StructuredPresentation;
			binding: string;
			columns: StructuredViewColumn[];
			layout?: "grid" | "row";
			gridColumns?: number;
			cardSize?: "small" | "default";
			cardClassName?: string;
	  }
	| {
			id: string;
			type: "QUERY_TABLE";
			rowGroup?: string;
			binding: string;
			columns: StructuredViewColumn[];
			searchFields?: string[];
			filterFields?: {
				key: string;
				title: string;
				type?: "STRING" | "NUMBER" | "DATE" | "TIME" | "BOOLEAN";
				options?: { label: string; value: string }[];
			}[];
			pageSize?: number;
			summary?: {
				binding: string;
				cells: {
					content: StructuredPresentation;
					colSpan?: number;
					align?: "left" | "center" | "right";
					visibleWhen?: StructuredViewCondition;
				}[];
			};
			collapseSummary?: StructuredPresentation;
			description?: string;
			sort?: { field: string; direction: "asc" | "desc" }[];
			showExport?: boolean;
			showSearch?: boolean;
			showFilters?: boolean;
			showDropdownFilters?: boolean;
			hiddenDropdownFilters?: string[];
			accordion?: boolean;
			sticky?: boolean;
			scrollHeight?: number;
			exportColumns?: StructuredViewColumn[];
			toolbar?: StructuredViewNode[];
			toolbarPosition?: "beforeSearch" | "afterSearch";
			toolbarGap?: number;
			className?: string;
			tableLayout?: "auto" | "fixed";
			scrollWidth?: number | false;
			emptyText?: string;
			emptyDescription?: string;
			pagination?: boolean;
			paginationUrlKeys?: { page: string; pageSize: string };
			hideEmptyColumns?: boolean;
			showSizeChanger?: boolean | "auto";
			showTotal?: boolean;
			dateColumns?: {
				fromParameter?: string;
				days?: number;
				rangeParameter?: string;
				display?: "cards" | "plain";
				headerFormat?: string;
				width?: number;
				field: string;
				dateField: string;
				columns: StructuredViewColumn[];
			};
			detail?: {
				visibleWhen?: StructuredViewCondition;
				history?: { field: string; valueField: string };
				mode?: "drawer" | "expand";
				columnTitle?: string;
				columnWidth?: number;
				title?: string;
				parameters: Record<string, string>;
				children: StructuredViewNode[];
			};
	  }
	| StructuredAggregateTableNode
	| { id: string; type: "TEXT"; text: string; heading?: boolean }
	| {
			id: string;
			type: "STACK" | "GRID" | "CARD";
			header?: StructuredViewNode[];
			extra?: StructuredViewNode[];
			direction?: "row" | "column";
			align?: "start" | "center" | "end";
			justify?: "start" | "center" | "end" | "space-between";
			className?: string;
			padding?: number;
			title?: string;
			columns?: StructuredGridColumns;
			gap?: number;
			children: StructuredViewNode[];
	  }
	| {
			id: string;
			type: "TABLE";
			recordHistory?: boolean;
			binding: string;
			columns: StructuredViewColumn[];
			searchField?: string;
			showSearch?: boolean;
			showFilters?: boolean;
			showExport?: boolean;
			dateField?: string;
			sort?: { field: string; direction: "asc" | "desc" }[];
	  }
	| { id: string; type: "PAGE_BLOCK"; host: string; block: string }
	| { id: string; type: "VIEW"; views: string[]; nativeBlock?: string; contextBindings?: Record<string, string> }
	| { id: string; type: "COMPONENT"; component: string; binding: string; config?: Record<string, StructuredJson> }
);
