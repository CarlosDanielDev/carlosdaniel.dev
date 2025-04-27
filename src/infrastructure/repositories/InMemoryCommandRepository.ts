import { Command } from '../../domain/terminal/Command';
import {
	CommandHandler,
	CommandRepository,
} from '../../domain/terminal/CommandRepository';

export class InMemoryCommandRepository implements CommandRepository {
	private readonly commands: Map<string, CommandHandler>;

	constructor() {
		this.commands = new Map<string, CommandHandler>();
	}

	register(commandName: string, handler: CommandHandler): void {
		this.commands.set(commandName, handler);
	}

	findCommandHandler(command: Command): CommandHandler | null {
		if (command.isEmpty()) {
			return null;
		}

		const handler = this.commands.get(command.getValue());
		return handler || null;
	}

	getAvailableCommands(): string[] {
		return Array.from(this.commands.keys());
	}
}
