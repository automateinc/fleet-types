export interface IRecruitmentPersonalInformation {
	id: string;
	createdAt: string;
	updatedAt: string;

	employeeGroupId: string;

	educationLevel?: string;
	firstName?: string;
	middleNames?: string;
	fatherName?: string;
	lastName?: string;
	gender?: "MALE" | "FEMALE";
	nationality?: string;
	nationalNumber: string;
	dateOfBirth?: string;
	placeOfBirth?: string;
	name?: string;
	fullName?: string;
	location?: string;
	metadata?: any;
}
