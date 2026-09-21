export interface IEmployeeMonthlyPayReviewField {
	id: string;
	createdAt: string;
	updatedAt?: string;

	reviewId: string;
	mobileFieldId: string;
	payrollFieldId: string;
	title: string;
	format?: string;
	postfix?: string;
	value?: unknown;
}
