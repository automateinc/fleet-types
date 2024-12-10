import { IRequestCategory } from ".";

export interface IRequestType {
	id: string;
	name: string;
	createdAt: string;
	updatedAt: string;
	categories: IRequestCategory[];
	visible: boolean;
}
