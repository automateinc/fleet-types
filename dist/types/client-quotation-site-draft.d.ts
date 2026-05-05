export interface IClientQuotationSiteDraft {
	id: string;
	createdAt: string;
	updatedAt: string;

	quotationId: string;
	clientSiteId?: string | null;
	scheduleSiteId?: string | null;

	name: string;

	metadata?: any;
}