export interface IStructuredContentLayoutVisibilityRule {
	id: string;
	contentId: string;
	nodeId: string;
	entryKey: string;
	path: string;
	operator: string;
	parentId: string | null;
}
