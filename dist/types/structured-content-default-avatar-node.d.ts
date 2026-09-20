import type { IStructuredContentNodeBase } from "./structured-content-node-base";

export interface IStructuredContentDefaultAvatarNode extends IStructuredContentNodeBase {
	config?: {
		size?: number;
	};
	type: "DEFAULT_AVATAR";
}
