export enum EmployeeFieldRecruitmentGroup {
	PERSONAL = "personalInformation",
	EMPLOYMENT = "employmentInformation",
	PASSPORT = "passportInformation",
	NATIONAL_CARD = "nationalCardInformation",
	VISA = "visaInformation",
	MEDICAL = "medicalInformation",
	OTHER = "otherInformation",
}

type EmployeeFieldBase = {
	field: string;
	fieldType: "STRING" | "NUMBER" | "DATE" | "BOOLEAN" | "DATETIME" | "TIME";
	defaultValue?: any;
};

type EmployeeFieldRequest = {
	mode?: "LATEST" | "ALL" | "SUM" | "COUNT" | "EXISTENCE";
	requestType?: string;
	requestCategory?: string;
};

type EmployeeFieldRecruitment = {
	recruitmentGroup?: EmployeeFieldRecruitmentGroup;
};

type EmployeeFieldRequestInput = EmployeeFieldBase & EmployeeFieldRequest;
type EmployeeFieldRecruitmentInput = EmployeeFieldBase & EmployeeFieldRecruitment;

type EmployeeFieldInput = EmployeeFieldRequestInput | EmployeeFieldRecruitmentInput;

export interface IEmployeeField {
	id: string;
	createdAt: string;
	updatedAt?: string;
	regionId: string;

	employeeId?: string;

	name: string;
	category?: string;
	type: "METADATA" | "REQUEST" | "RECRUITMENT";
	config?: EmployeeFieldInput;

	fallbackId?: string;
}
