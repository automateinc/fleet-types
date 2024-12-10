export interface IPhoneLinePackage {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	price: number;
	dataThreshold: number;
	internationalBarring: boolean;

	primaryKey: string;

	regionId: string;
}
