import { IMetadataDocuments, IMetadataExpiringDocuments, IMetadataMissingDocuments, IMetadataStatusCheck } from ".";

export interface IMetadata {
	expiringDocuments?: {
		[key: PropertyKey]: IMetadataExpiringDocuments;
	};
	statusCheck?: IMetadataStatusCheck;
	documents?: {
		[key: PropertyKey]: IMetadataDocuments;
	};
	missingDocuments?: {
		[key: PropertyKey]: IMetadataMissingDocuments;
	};
	fields?: {
		[key: PropertyKey]: any;
	};
	payroll?: {
		iban: string;
		increment: number;
		contractType: "TRANSFER" | "CASH" | "CHECK" | "UNPAID" | "FORSA" | "OTHER";
	};
}
