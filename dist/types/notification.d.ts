export interface INotification {
	id: string;
	createdAt: string;
	updatedAt: string;

	title: string;
	content: string;
	isRead: boolean;

	type?: string;

	userId?: string;
	employeeId?: string;
}
