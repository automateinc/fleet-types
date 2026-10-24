export interface IStructuredContentVisibilityOperand {
	id: string;
	ruleId: string;
	side: string;
	source: string;
	fieldPath: string[];
	parameter: string | null;
	stringValue: string | null;
	numberValue: number | null;
	booleanValue: boolean | null;
}
