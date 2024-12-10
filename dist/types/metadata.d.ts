import { IMetadataDocuments, IMetadataExpiringDocuments, IMetadataMissingDocuments, IMetadataStatusCheck } from ".";

export interface IMetadata {
	expiringDocuments?: {
		[key: string]: IMetadataExpiringDocuments;
	};
	statusCheck?: IMetadataStatusCheck;
	documents?: {
		[key: string]: IMetadataDocuments;
	};
	missingDocuments?: {
		[key: string]: IMetadataMissingDocuments;
	};
}
