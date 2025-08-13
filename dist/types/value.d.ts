import { IClient } from "./client";
import { ICompany } from "./company";
import { IContact } from "./contact";
import { IContract } from "./contract";
import { IFile } from "./file";
import { IModel } from "./models";
import { IPaymentCycle } from "./payment-cycle";
import { IZone } from "./zone";

export interface IValue {
	id: string;
	type:
		| "STRING"
		| "NUMBER"
		| "BOOLEAN"
		| "DATE"
		| "DATETIME"
		| "TIME"
		| "UPLOAD"
		| "RELATION"
		| "SINGLE_SELECT"
		| "SIGNATURE";
	name: string;
	value: any;
	config?: {
		model?: IModel;
		options?: Array<{ label: string; value: string } | string>;
		optionsUrl?: string;
		dependencies?: string[];
		hasDependency?: boolean;
		uploadCategory?: string;
	};
	metadata?: any;
	clientId?: string;
	companyId?: string;
	contactId?: string;
	contractId?: string;
	fileId?: string;
	paymentCycleId?: string;
	zoneId?: string;
	createdAt: string;
	updatedAt: string;

	file?: IFile;
	company?: ICompany;
	client?: IClient;
	contract?: IContract;
	contact?: IContact;
	paymentCycle?: IPaymentCycle;
	zone?: IZone;
}
