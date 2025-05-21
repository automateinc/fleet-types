export type ILeaveType = {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	paid: boolean;

	regionId: string;
};
