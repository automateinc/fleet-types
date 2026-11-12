type EmployeeFieldBase = {
	field: string;
	fieldType: "STRING" | "NUMBER" | "DATE" | "BOOLEAN" | "DATETIME" | "TIME";
	defaultValue?: any;
};

type EmployeeFieldRequest = {
	mode: "LATEST" | "FIRST" | "ALL" | "SUM" | "COUNT" | "EXISTENCE";
	requestType: string;
	requestCategory: string;
};

type EmployeeFieldRecruitment = {
	path?: string[];
};

export type EmployeeFieldRequestInput = EmployeeFieldBase & EmployeeFieldRequest;
export type EmployeeFieldRecruitmentInput = Pick<EmployeeFieldBase, "fieldType" | "defaultValue"> &
	EmployeeFieldRecruitment;
export type EmployeeFieldMetadataInput = Pick<EmployeeFieldBase, "fieldType" | "defaultValue"> & {
	path: string[];
};

type EmployeeFieldInput = EmployeeFieldRequestInput | EmployeeFieldRecruitmentInput | EmployeeFieldMetadataInput;

export interface IEmployeeField {
	recruitmentFieldId?: string | null;
	id: string;
	createdAt: string;
	updatedAt?: string;
	regionId: string;

	employeeId?: string;

	name: string;
	category?: string;
	type: "METADATA" | "REQUEST" | "RECRUITMENT" | "EMPLOYEE";
	config?: EmployeeFieldInput;

	fallbackId?: string;
	metadata?: any;
}
