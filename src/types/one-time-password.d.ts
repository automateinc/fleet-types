export interface IOneTimePassword {
	createdAt: string;
	updatedAt: string;
	id: string;

	expiryTime: string;
	timeSent: string;
	requesterIp?: string;
	maxAttempts: number;
	type: "DOCUMENT_SIGNING" | "EMAIL_VERIFICATION" | "PHONE_VERIFICATION" | "PASSWORD_RESET";
	status: "PENDING" | "VERIFIED" | "REJECTED";
	method: "WHATSAPP" | "SMS" | "EMAIL";

	requestId?: string;
	contactId?: string;
}
