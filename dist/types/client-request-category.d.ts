export interface IClientRequestCategory {
	id: string;
	createdAt: Date;
	updatedAt: Date;

	name: string;
	systemReserved: boolean;
	weight: number;
	hidden: boolean;
	infoType: "INFO" | "DANGER" | "WARNING";
	info?: string;

	typeId: string;

	requiresVerification: boolean;
	requiresApproval: boolean;

	metadata: any;
}
