import type { StructuredContentStatisticFormat } from "./structured-content";
import type { IStructuredContentNodeBase } from "./structured-content-node-base";

export interface IStructuredContentStatisticNode extends IStructuredContentNodeBase {
	config: {
		format?: StructuredContentStatisticFormat;
		label: string;
		maximumFractionDigits?: number;
		minimumFractionDigits?: number;
		useGrouping?: boolean;
	};
	type: "STATISTIC";
}
