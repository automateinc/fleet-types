import { ITag } from ".";

export interface IFile {
	id: string;
	updatedAt: Date;
	createdAt: Date;
	lastAccessedAt?: string;

	name: string;
	slug: string;
	type: string;
	size: number;
	url: string;
	region: string;

	thumbnail?: IFile;

	tags?: ITag[];
}
