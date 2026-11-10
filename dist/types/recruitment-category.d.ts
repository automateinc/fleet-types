export interface IRecruitmentCategory {
	id: string;
	createdAt: string;
	updatedAt?: string | null;
	regionId: string;
	name: string;
	order: number;
	removedAt?: string | null;
}
