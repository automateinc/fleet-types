export interface IContact {
	createdAt: Date;
	id: string;
	updatedAt: Date;

	type: "EMAIL" | "PHONE";
	value: string;
	verified: boolean;
}
