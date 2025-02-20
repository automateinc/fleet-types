import { ITagColor } from "./tag-color";

export interface IEmployeeLabel {
	id: string;
	createdAt: string;
	updatedAt?: string;

	name: string;
	lightColors: ITagColor;
	darkColors?: ITagColor;

	regionId: string;
}
