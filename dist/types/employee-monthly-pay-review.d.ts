export type EmployeeMonthlyPayReviewStatus = "VERIFIED" | "DISPUTE_PENDING" | "ADDITIONAL_INFO_REQUESTED" | "RESOLVED";

export interface IEmployeeMonthlyPayReview {
	id: string;
	createdAt: string;
	updatedAt?: string;

	status: EmployeeMonthlyPayReviewStatus;

	monthlyPayId: string;
	additionalInfoDocumentsRequired: boolean;

	lastHandledById?: string;
	lastHandledAt?: string;
}
