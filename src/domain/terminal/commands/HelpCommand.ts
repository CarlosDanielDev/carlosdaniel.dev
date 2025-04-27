import { CommandHandler, CommandRepository } from '../CommandRepository';

export class HelpCommand implements CommandHandler {
	private readonly commandRepository: CommandRepository;

	private readonly commandDescriptions: Map<string, string>;

	constructor(commandRepository: CommandRepository) {
		this.commandRepository = commandRepository;
		this.commandDescriptions = new Map<string, string>();
	}

	registerDescription(command: string, description: string): void {
		this.commandDescriptions.set(command, description);
	}

	execute(): string {
		const commands = this.commandRepository.getAvailableCommands();

		const helpText = commands
			.map(cmd => {
				const description = this.commandDescriptions.get(cmd) || '';
				return `- ${cmd}: ${description}`;
			})
			.join('\n');

		return `Available commands:\n${helpText}`;
	}
}
