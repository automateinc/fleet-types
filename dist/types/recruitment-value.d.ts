export interface IRecruitmentValue {
	id: string;
	createdAt: string;
	updatedAt?: string | null;
	recruitmentId: string;
	fieldId: string;
	value?: string | null;
	referenceCardinality?: "SINGLE" | "MULTI" | null;
}
