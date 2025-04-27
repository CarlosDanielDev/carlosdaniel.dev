import { Command } from 'src/domain/terminal/Command';
import { CommandRepository } from 'src/domain/terminal/CommandRepository';
import { TerminalLine } from 'src/domain/terminal/TerminalLine';

export class TerminalService {
	private readonly commandRepository: CommandRepository;

	private readonly history: TerminalLine[];

	constructor(commandRepository: CommandRepository) {
		this.commandRepository = commandRepository;
		this.history = [];
	}

	executeCommand(commandString: string): TerminalLine {
		const command = new Command(commandString);

		if (command.isEmpty()) {
			return new TerminalLine(command, '');
		}

		const handler = this.commandRepository.findCommandHandler(command);

		let output: string;
		if (handler) {
			output = handler.execute();
		} else {
			output = `${command.getValue()}: command not found. Type 'help' for available commands.`;
		}

		const terminalLine = new TerminalLine(command, output);
		this.history.push(terminalLine);

		return terminalLine;
	}

	getHistory(): TerminalLine[] {
		return [...this.history];
	}

	clearHistory(): void {
		this.history.length = 0;
	}

	getAvailableCommands(): string[] {
		return this.commandRepository.getAvailableCommands();
	}
}
