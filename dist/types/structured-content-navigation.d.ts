export interface IStructuredContentNavigation {
	id: string;
	teamId: string;
	createdAt: string;
	updatedAt: string;
	key: string;
	name: string;
	slug: string;
	icon: string | null;
	order: number;
	parentId: string | null;
}
