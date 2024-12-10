import { IClient, IClientClass, IClientContact, IScheduleSite } from ".";

export interface IClientSite {
	id: string;
	createdAt: string;
	updatedAt: string;
	name: string;
	address?: string;
	geolocation?: { lat: number; lng: number };
	class: IClientClass;
	classId: string;
	client: IClient;
	clientId: string;
	contact?: IClientContact;
	contactId?: string;
	scheduleSite?: IScheduleSite;
	// Add Zones later
}
