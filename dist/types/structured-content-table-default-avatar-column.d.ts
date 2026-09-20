import type { IStructuredContentTableColumnBase } from "./structured-content-table-column-base";

export interface IStructuredContentTableDefaultAvatarColumn extends IStructuredContentTableColumnBase {
	config?: {
		size?: number;
	};
	type: "DEFAULT_AVATAR";
}
