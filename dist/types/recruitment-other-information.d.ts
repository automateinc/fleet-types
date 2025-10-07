import { IRecruitmentOtherInformationAdditionalInformation } from ".";

export interface IRecruitmentOtherInformation {
	id: string;
	createdAt: string;
	updatedAt: string;
	additionalInformation: IRecruitmentOtherInformationAdditionalInformation[];
	metadata?: any;
	initialClientId?: string;
}
