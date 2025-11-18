export interface IClient {
	id: string;
	name: string;
	status: "ACTIVE" | "INACTIVE";
	createdAt: string;
	updatedAt: string;
	deletedAt: string;
	logoId: string;
	folderKey: string;
	classId?: string;
	metadata?: any;
}
