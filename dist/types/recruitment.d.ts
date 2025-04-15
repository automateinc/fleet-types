export interface IRecruitment {
	id: string;
	createdAt: string;
	updatedAt: string;

	status: "DRAFT" | "VERIFIED" | "PENDING" | "CHANGES_NEEDED" | "RECRUITED";
	regionId: string;
	createdById: string;
	folderKey: string;

	recruitedAt?: string;
	recruitedById?: string;

	requestedChanges?: string;
}
