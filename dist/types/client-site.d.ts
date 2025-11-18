export interface IClientSite {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	address?: string;
	geolocation?: { lat: number; lng: number };
	classId?: string;
	clientId: string;
	contactId?: string;
	metadata?: any;
}
