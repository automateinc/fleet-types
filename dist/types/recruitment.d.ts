export interface IRecruitment {
	id: string;
	createdAt: string;
	updatedAt: string;

	firstName: string;
	lastName: string;
	name: string;

	status: "DRAFT" | "VERIFIED" | "PENDING" | "CHANGES_NEEDED" | "RECRUITED";
	regionId: string;
	createdById: string;
	folderKey: string;

	recruitedAt?: string;
	recruitedById?: string;

	requestedChanges?: string;
	metadata?: any;
}
