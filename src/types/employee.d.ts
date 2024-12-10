import { IFile } from ".";

export interface IEmployee {
	id: string;
	createdAt: string;
	updatedAt: string;
	primaryKey: string;
	companyId: string;
	contractId: string;
	dateOfBirth: string;
	firstName: string;
	fullName: string;
	gender: string;
	lastName: string;
	middleNames: string;
	name: string;
	nationality: string;
	nationalNumber: string;
	passportId: string;
	password: string;
	placeOfBirth: string;
	profilePicture?: IFile;
	statusId: string;
	folderKey: string;
	recruitmentId?: string;

	primaryId?: string;
	secondaryId?: string;

	documents: Array<{
		file: IFile;
		name: string;
	}>;

	fields: {
		[key: string]: {
			[key: string]: string;
		};
	};
}
