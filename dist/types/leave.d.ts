export type ILeave = {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	startDate: string;
	endDate: string;
	typeId: string;
	employeeId: string;

	duration: number;
	status: "ACTIVE" | "UPCOMING" | "ENDED";

	notes?: string;
};
