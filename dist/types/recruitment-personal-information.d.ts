export interface IRecruitmentPersonalInformation {
	id: string;
	createdAt: string;
	updatedAt: string;

	employeeGroupId?: string | null;

	educationLevel?: string;
	firstName?: string;
	middleNames?: string;
	fatherName?: string;
	lastName?: string;
	gender?: string | null;
	nationality?: string;
	nationalNumber: string;
	dateOfBirth?: string;
	placeOfBirth?: string;
	name?: string;
	fullName?: string;
	location?: string;
	metadata?: any;
}
