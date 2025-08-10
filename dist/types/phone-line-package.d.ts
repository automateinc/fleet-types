export interface IPhoneLinePackage {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	price: number;
	dataThreshold: string;
	internationalBarring: boolean;

	primaryKey: string;

	regionId: string;
	metadata?: any;
}
