/** Public model fields. Resolved inputs and the internal lease token are not exposed by the API. */
export interface IRequestDocument {
	id: string;
	createdAt: string;
	updatedAt: string;

	requestId: string;
	revisionId: string;
	generationExecutionId: string;
	signatureExecutionId: string;

	authorizedAt: string | null;
	acceptedAt: string | null;
	submittedOtp: boolean;
	signingUserId: string | null;
	signingEmployeeId: string | null;
	signatureFileId: string | null;
	leaseExpiresAt: string | null;

	generatedFileId: string | null;
	signedFileId: string | null;
	contentFileId: string | null;
	letterheadFileId: string | null;
}
