export interface IMetadataStatusCheck {
	currentStatus?: string;
	newStatus?: string;
	targetStatus?: string;
	requirements?: Array<{
		categoryId?: string;
		complete: boolean;
		label: string;
		name: string;
		typeId?: string;
		optional: boolean;
		noShow: boolean;
	}>;
}
