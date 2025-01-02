import { AxiosError } from "axios";
import { UseInfiniteQueryOptions, UseMutationOptions, UseQueryOptions } from "@tanstack/react-query";

type APIError = {
	error:
		| string
		| Array<{
				message: string;
				field: string;
		  }>;
};

export type MutationOptions<Response, Args = void> = UseMutationOptions<Response, AxiosError<APIError>, Args, any>;

export type QueryOptions<Response> = UseQueryOptions<Response, AxiosError<APIError>, Response, any>;

export type InfiniteQueryOptions<Response> = Omit<
	UseInfiniteQueryOptions<Response, AxiosError<APIError>, Response, Response, any>,
	"queryKey" | "queryFn"
>;

export type FormInputType<T extends (...args: any) => any> = Parameters<ReturnType<T>["mutate"]>[0];

export type PaginatedResponse<T> = {
	limit: number;
	page: number;
	count: number;
	exceedCount: boolean;
	exceedTotalPages: boolean;
	result: T[];
	hasNextPage: boolean;
	hasPrevPage: boolean;
	totalPages: number;
};

export * from "./attendance";
export * from "./attendance-presence-check";
export * from "./attendance-count";
export * from "./company";
export * from "./contract";
export * from "./dispatch";
export * from "./dispatch-attendance";
export * from "./dispatch-count";
export * from "./employee";
export * from "./nfc-tag";
export * from "./employee-status";
export * from "./employee-monthly-payroll";
export * from "./region";
export * from "./request";
export * from "./request-verification";
export * from "./restriction";
export * from "./request-category";
export * from "./contact";
export * from "./request-category-field";
export * from "./request-type";
export * from "./models";
export * from "./role";
export * from "./schedule";
export * from "./schedule-draft";
export * from "./ceiling";
export * from "./request-value";
export * from "./team";
export * from "./user";
export * from "./recruitment";
export * from "./recruitment-employment-information-history";
export * from "./recruitment-employment-information";
export * from "./recruitment-medical-information";
export * from "./recruitment-other-information";
export * from "./recruitment-passport-information";
export * from "./recruitment-visa-information";
export * from "./recruitment-personal-information";
export * from "./file";
export * from "./gender";
export * from "./request-action";
export * from "./request-action-execution";
export * from "./signing-mode";
export * from "./recruitment-other-information-additional-information";
export * from "./recruitment-national-card-information";
export * from "./client-class";
export * from "./client";
export * from "./client-contact";
export * from "./client-site";
export * from "./tag";
export * from "./client-class";
export * from "./client";
export * from "./client-contact";
export * from "./client-site";
export * from "./zone";
export * from "./schedule-site";
export * from "./position";
export * from "./one-time-password";
export * from "./position-version";
export * from "./shift";
export * from "./shift-type";
export * from "./standard-operating-procedure";
export * from "./schedule-attendance";
export * from "./coords";
export * from "./attendance-leave-reason";
export * from "./employee-comment";
export * from "./employee-comment-reaction";
export * from "./metadata";
export * from "./metadata-expiring-documents";
export * from "./metadata-status-check";
export * from "./metadata-missing-documents";
export * from "./metadata-documents";
export * from "./config";
export * from "./contract-allowance";
export * from "./contract-deduction";
export * from "./contract-benefit";
export * from "./payment-cycle";
export * from "./building";
export * from "./building-lease";
export * from "./building-lease-payment";
export * from "./building-contact";
export * from "./unit";
export * from "./unit-room";
export * from "./bunk";
export * from "./permission";
export * from "./permission-group";
export * from "./vendor";
export * from "./vendor-contact";
export * from "./vehicle";
export * from "./asset";
export * from "./asset-type";
export * from "./asset-category";
export * from "./asset-category-field";
export * from "./asset-value";
export * from "./phone-line";
export * from "./phone-line-commitment";
export * from "./phone-line-contract";
export * from "./phone-line-package";
export * from "./vendor";
export * from "./vehicle-make";
export * from "./vehicle-model";
export * from "./vehicle-registration";
export * from "./vehicle-insurance";
export * from "./vehicle-contract";
export * from "./vehicle-contract-payment";
export * from "./loan";
export * from "./loan-installment";
export * from "./report";
export * from "./report-category";
export * from "./report-category-field";
export * from "./report-type";
export * from "./report-value";
export * from "./report-comment";
export * from "./report-comment-reaction";
export * from "./call-log";
export * from "./notification";
export * from "./notification-token";
