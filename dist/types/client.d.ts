export interface IClient {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;

	name: string;
	primaryId: string;
	primaryKey: string;

	logoId: string;
	folderKey: string;
	classId?: string;
	statusId: string;
	metadata?: any;
}
