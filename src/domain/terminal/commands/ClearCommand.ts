import { CommandHandler } from '../CommandRepository';

export class ClearCommand implements CommandHandler {
	private readonly terminalService: {
		clearHistory: () => void;
	};

	constructor(terminalService: { clearHistory: () => void }) {
		this.terminalService = terminalService;
	}

	execute(): string {
		this.terminalService.clearHistory();
		return '';
	}
}
