export interface IUser {
	id: string;
	email: string;
	password: string;
	googleId: string;
	role: string;
	firstName: string;
	lastName: string;
	folderKey: string;
	name: string;
	teamId: string;
	createdAt: string;
	updatedAt: string;
	metadata?: { [key: PropertyKey]: any };
}
