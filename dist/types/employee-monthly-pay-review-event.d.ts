export type EmployeeMonthlyPayReviewEventType =
	| "VERIFIED"
	| "DISPUTED"
	| "ADDITIONAL_INFO_REQUESTED"
	| "ADDITIONAL_INFO_PROVIDED"
	| "RESOLVED";

export interface IEmployeeMonthlyPayReviewEvent {
	id: string;
	createdAt: string;
	updatedAt?: string;

	type: EmployeeMonthlyPayReviewEventType;

	reviewId: string;
	reason?: string;
	supportingDocumentsRequired?: boolean;

	userId?: string;
	employeeId?: string;
}
