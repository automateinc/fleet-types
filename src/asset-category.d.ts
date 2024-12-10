import { IAssetCategoryField } from "./asset-category-field";

export interface IAssetCategory {
	id: string;
	name: string;
	typeId: string;
	fields: IAssetCategoryField[];
	createdAt: string;
	updatedAt: string;
}
