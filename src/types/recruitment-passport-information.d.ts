export interface IRecruitmentPassportInformation {
	id: string;
	createdAt: string;
	updatedAt: string;

	number?: string;
	expiryDate?: string;
	country?: string;
	placeOfIssue?: string;
	issueDate?: string;
	secondPage?: boolean;
}
