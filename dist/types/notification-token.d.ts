export interface INotificationToken {
	id: string;
	createdAt: string;
	updatedAt: string;

	token: string;

	userId?: string;
	employeeId?: string;
	metadata?: any;
}
