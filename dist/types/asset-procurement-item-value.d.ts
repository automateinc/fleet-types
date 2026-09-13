import { IAssetCategoryField } from "./asset-category-field";

export interface IAssetProcurementItemValue {
	id: string;
	createdAt: string;
	updatedAt?: string;

	itemId: string;
	name: string;
	value?: string;
	type: IAssetCategoryField["type"];
	config?: any;
	metadata?: any;
}
