export interface IVendor {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	name: string;

	logoId?: string;
	folderKey?: string;

	regionId: string;
	metadata?: any;
}
