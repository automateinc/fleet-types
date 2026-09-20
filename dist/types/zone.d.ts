export interface IZone {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	name: string;
	area: string;

	schedulesResetOn: "SUNDAY" | "MONDAY" | "TUESDAY" | "WEDNESDAY" | "THURSDAY" | "FRIDAY" | "SATURDAY" | null;

	regionId: string;
	metadata?: any;
}
