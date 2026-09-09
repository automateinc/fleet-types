export interface IClientQuotationSiteDraft {
	id: string;
	createdAt: string;
	updatedAt: string;

	quotationId: string;
	siteId?: string | null;

	name: string;

	metadata?: any;
}
