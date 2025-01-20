export interface IEmployeeField {
	id: string;
	createdAt: string;
	updatedAt?: string;
	regionId: string;

	employeeId: string;

	name: string;
	category: string;
	type: "METADATA" | "REQUEST" | "RECRUITMENT";
	config: {
		[keyof: PropertyKey]: any;
	};

	fallbackId: string;
}
