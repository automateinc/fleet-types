export interface ISite {
	id: string;
	createdAt: string;
	updatedAt: string;
	deletedAt?: string | null;
	name: string;
	address?: any;
	geolocation?: { lat: number; lng: number };
	classId?: string;
	clientId: string;
	zoneId?: string | null;
	contractId?: string | null;
	contactId?: string;
	metadata?: any;
}
