export type ILeaveEvent = {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	startDate: string;
	endDate: string;
	duration: number;

	recurrence: "ONCE" | "ANNUAL";

	regionId: string;
};
