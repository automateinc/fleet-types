export type IClientChecklistDefinitionScope = "REGION" | "CLIENT";

export interface IClientChecklistDefinition {
	id: string;
	createdAt: string;
	updatedAt?: string | null;

	title: string;
	description?: string | null;
	order: number;
	requiresAttachment: boolean;

	systemGenerated: boolean;
	scope: IClientChecklistDefinitionScope;

	regionId: string;
	clientId?: string | null;
	createdById?: string | null;

	visibleWhenFieldId?: string | null;
	visibleWhenValueString?: string | null;

	metadata?: any;
}
