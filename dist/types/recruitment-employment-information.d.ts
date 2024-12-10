import { IFile, IRecruitmentEmploymentInformationHistory } from ".";

export interface IRecruitmentEmploymentInformation {
	id: string;
	createdAt: string;
	updatedAt: string;
	retirementStatus: boolean;
	resume?: IFile;

	desiredRole?: string;
	history?: IRecruitmentEmploymentInformationHistory[];
}
