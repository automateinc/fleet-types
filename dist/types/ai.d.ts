export type AiModule = "GENERIC" | "PAYROLL";
export type AiClientPlatform = "mobile-user" | "web";

export interface IAiConversation<TContext = unknown, TMessage = unknown> {
	context: TContext;
	createdAt: Date;
	id: string;
	isGenerating: boolean;
	messages: TMessage[];
	module: AiModule;
	regionId: string;
	title: string;
	updatedAt?: Date | null;
	userId: string;
	version: number;
}

export interface IAiArtifact {
	createdAt: Date;
	fileName: string;
	id: string;
	regionId: string;
	updatedAt?: Date | null;
	userId: string;
}

export interface IAiResolvedRoute {
	description: string;
	pathParams: string[];
	platforms: AiClientPlatform[];
	queryParams: string[];
	route: string;
}

export interface IAiResolvedLink {
	href: string | null;
	matches: IAiResolvedRoute[];
	platform: AiClientPlatform;
	route: IAiResolvedRoute | null;
}
