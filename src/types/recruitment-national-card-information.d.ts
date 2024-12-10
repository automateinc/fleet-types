import { IFile } from ".";

export interface IRecruitmentNationalCardInformation {
	id: string;
	createdAt: string;
	updatedAt: string;
	number?: string;
	country?: string;
	expiryDate: string;
	placeOfIssue?: string;
	issueDate?: string;
	recruitmentId: string;
}
