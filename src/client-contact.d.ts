import { IClient } from "./client";

export interface IClientContact {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	number: string;
	email?: string;
	notes?: string;
	client: IClient;
	clientId: string;
}
