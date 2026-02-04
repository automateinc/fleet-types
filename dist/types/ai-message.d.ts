export interface IAIMessage {
	role: "user" | "assistant" | "system";
	content: string;
}
