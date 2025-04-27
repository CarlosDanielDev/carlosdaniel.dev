import { Command } from './Command';

export class TerminalLine {
	private readonly command: Command;

	private readonly output: string;

	constructor(command: Command, output: string) {
		this.command = command;
		this.output = output;
	}

	getCommand(): Command {
		return this.command;
	}

	getOutput(): string {
		return this.output;
	}

	getCommandValue(): string {
		return this.command.getValue();
	}
}
