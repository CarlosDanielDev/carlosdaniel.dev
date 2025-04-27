import { Command } from './Command';

export interface CommandRepository {
	findCommandHandler(command: Command): CommandHandler | null;
	getAvailableCommands(): string[];
}

export interface CommandHandler {
	execute(args?: string[]): string;
}
