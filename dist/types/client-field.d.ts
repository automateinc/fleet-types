type ClientFieldBase = {
	field: string;
	fieldType: "STRING" | "NUMBER" | "DATE" | "BOOLEAN" | "DATETIME" | "TIME";
	defaultValue?: any;
};

type ClientFieldRequest = {
	mode: "LATEST" | "ALL" | "SUM" | "COUNT" | "EXISTENCE";
	requestType: string;
	requestCategory: string;
};

export type ClientFieldRequestInput = ClientFieldBase & ClientFieldRequest;
export type ClientFieldMetadataInput = Pick<ClientFieldBase, "fieldType" | "defaultValue"> & {
	path: string[];
};

type ClientFieldInput = ClientFieldRequestInput | ClientFieldMetadataInput;

export interface IClientField {
	id: string;
	createdAt: string;
	updatedAt?: string;
	regionId: string;

	employeeId?: string;

	name: string;
	category?: string;
	type: "METADATA" | "REQUEST" | "CLIENT";
	config?: ClientFieldInput;

	fallbackId?: string;
	metadata?: any;
}
