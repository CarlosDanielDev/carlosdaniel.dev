import { InMemoryCommandRepository } from 'src/infrastructure/repositories/InMemoryCommandRepository';
import { HelpCommand } from 'src/domain/terminal/commands/HelpCommand';
import { WhoAmICommand } from 'src/domain/terminal/commands/WhoAmICommand';
import { SkillsCommand } from 'src/domain/terminal/commands/SkillsCommand';
import { ClearCommand } from 'src/domain/terminal/commands/ClearCommand';
import { ExperienceCommand } from 'src/domain/terminal/commands/ExperienceCommand';
import { TFunction } from 'i18next';
import { TerminalService } from './TerminalService';

export class TerminalServiceFactory {
	static create(i18n: TFunction): TerminalService {
		const commandRepository = new InMemoryCommandRepository();
		const terminalService = new TerminalService(commandRepository);

		const helpCommand = new HelpCommand(commandRepository);
		commandRepository.register('help', helpCommand);
		helpCommand.registerDescription(
			'help',
			i18n('terminal.commands.help', 'Show available commands'),
		);

		const whoamiCommand = new WhoAmICommand(
			i18n('terminal.whoami', 'Carlos Daniel - Frontend Developer'),
		);
		commandRepository.register('whoami', whoamiCommand);
		helpCommand.registerDescription(
			'whoami',
			i18n('terminal.commands.whoami', 'Who am I'),
		);

		const skillsCommand = new SkillsCommand([
			i18n('terminal.skills.frontend', 'Frontend: React, TypeScript, Next.js'),
			i18n('terminal.skills.backend', 'Backend: Node.js, Express'),
			i18n('terminal.skills.other', 'Other: Git, Docker, AWS'),
		]);
		commandRepository.register('skills', skillsCommand);
		helpCommand.registerDescription(
			'skills',
			i18n('terminal.commands.skills', 'My skills'),
		);

		const experienceCommand = new ExperienceCommand(i18n);
		commandRepository.register('experience', experienceCommand);
		helpCommand.registerDescription(
			'experience',
			i18n('terminal.commands.experience', 'My professional experience'),
		);

		const clearCommand = new ClearCommand(terminalService);
		commandRepository.register('clear', clearCommand);
		helpCommand.registerDescription(
			'clear',
			i18n('terminal.commands.clear', 'Clear terminal'),
		);

		const welcomeMessage = i18n(
			'terminal.welcome',
			"Welcome to the interactive terminal! Type 'help' to see available commands.",
		);
		terminalService.executeCommand(welcomeMessage);

		return terminalService;
	}
}
