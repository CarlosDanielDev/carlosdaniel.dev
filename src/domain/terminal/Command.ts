export class Command {
	private readonly value: string;

	constructor(commandValue: string) {
		this.value = commandValue.trim().toLowerCase();
	}

	getValue(): string {
		return this.value;
	}

	isEmpty(): boolean {
		return this.value === '';
	}

	equals(command: Command): boolean {
		return this.value === command.getValue();
	}
}
