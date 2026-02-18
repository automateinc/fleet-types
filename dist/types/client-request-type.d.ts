export interface IClientRequestType {
	id: string;
	createdAt: Date;
	updatedAt: Date;

	name: string;
	systemReserved: boolean;
	weight: number;
	visible: boolean;

	regionId: string;

	metadata: any;
}
