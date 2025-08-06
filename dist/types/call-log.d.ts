export interface ICallLog {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string;

	type: "BUILDING" | "CLIENT" | "EMPLOYEE" | "OTHER" | null;

	direction: "INCOMING" | "OUTGOING";

	status: "MISSED" | "ANSWERED" | "REJECTED" | "FAILED" | "NO_ANSWER";

	employeeContactId?: string;
	clientContactId?: string;

	otherCaller?: string;

	userId?: string;

	startedAt: string;
	endedAt: string;

	number: string;

	duration: number;
	talkTime: number;
	ringTime: number;
	holdTime: number;

	referenceId?: string;

	recordingId?: string;
	reportId?: string;

	regionId: string;
	metadata?: any;
}
