export interface IPosition {
	id: string;
	updatedAt: Date;
	createdAt: Date;

	name: string;
	primaryKey: string;
	requiresPresenceChecks: boolean;
	siteId: string;
	roleId: string;
	metadata?: any;
}
