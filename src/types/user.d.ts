import { IFile } from ".";

export interface IUser {
	id: string;
	email: string;
	password: string;
	googleId: string;
	role: string;
	firstName: string;
	lastName: string;
	folderKey: string;
	profilePicture?: IFile;
	teamRole: string;
	signature?: IFile;
	name: string;
	teamId: string;
	createdAt: string;
	updatedAt: string;
	metadata?: { [key: PropertyKey]: any };
}
