import { CommandHandler } from '../CommandRepository';

export class SkillsCommand implements CommandHandler {
	private readonly skills: string[];

	constructor(skills: string[]) {
		this.skills = skills;
	}

	execute(): string {
		return this.skills.join('\n');
	}
}
