import { ITagColor } from "./tag-color";

export interface IClientStatus {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	default: boolean;
	weight: number;
	regionId: string;
	darkColors?: ITagColor | null;
	lightColors?: ITagColor | null;
	clientActive: boolean;
	metadata?: any;
}
