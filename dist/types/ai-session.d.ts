import { IAIMessage } from "./ai-message";

export interface IAISession {
	id: string;
	createdAt: string;
	updatedAt?: string;
	deletedAt?: string;
	userId: string;
	title: string;
	messages: IAIMessage[];
}
