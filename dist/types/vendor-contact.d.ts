export interface IVendorContact {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	name: string;
	number: string;
	email?: string;
	notes?: string;

	vendorId: string;
	metadata?: any;
}
