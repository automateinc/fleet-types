import { IClientClass, IClientContact, ICompany, IFile } from ".";

export interface IClient {
	id: string;
	name: string;
	status: "ACTIVE" | "INACTIVE";
	createdAt: string;
	updatedAt: string;
	deletedAt: string;
	logo: IFile;
	logoId: string;
	folderKey: string;
	class: IClientClass;
	classId: string;
	companies?: ICompany[];
	contacts?: IClientContact[];
	metadata?: any;
}
