/* eslint-disable max-classes-per-file */
import { TFunction } from 'i18next';

interface Project {
	name: string;
	description: string;
	status: string;
}

interface Experience {
	name: string;
	period: string;
	role: string;
	projects: Project[];
}

export class TerminalCommand {
	private readonly value: string;

	constructor(command: string) {
		this.value = command;
	}

	getValue(): string {
		return this.value;
	}
}

export class TerminalOutput {
	private readonly content: string;

	constructor(content: string) {
		this.content = content;
	}

	getContent(): string {
		return this.content;
	}
}

export class TerminalLine {
	private readonly command: TerminalCommand;

	private readonly output: TerminalOutput;

	constructor(command: TerminalCommand, output: TerminalOutput) {
		this.command = command;
		this.output = output;
	}

	getCommand(): TerminalCommand {
		return this.command;
	}

	getOutput(): TerminalOutput {
		return this.output;
	}

	static createFromTranslation(
		commandText: string,
		outputKey: string,
		outputDefault: string,
		t: TFunction,
	): TerminalLine {
		const command = new TerminalCommand(commandText);
		const output = new TerminalOutput(t(outputKey, outputDefault));
		return new TerminalLine(command, output);
	}

	static createFromTranslationArray(
		commandText: string,
		outputKeys: { key: string; defaultValue: string }[],
		t: TFunction,
	): TerminalLine {
		const command = new TerminalCommand(commandText);
		const translatedOutput = outputKeys
			.map(item => t(item.key, item.defaultValue))
			.join('\n');
		const output = new TerminalOutput(translatedOutput);
		return new TerminalLine(command, output);
	}

	static createFromExperiences(
		commandText: string,
		t: TFunction,
	): TerminalLine {
		try {
			const command = new TerminalCommand(commandText);

			// Buscar experiências das traduções
			const experiences = t('home.experiences', {
				returnObjects: true,
			}) as Experience[];

			// Formatar saída
			const formattedExp = experiences
				.map(exp => {
					return `• ${exp.name} (${exp.period})
  ${exp.role}`;
				})
				.join('\n\n');

			const output = new TerminalOutput(formattedExp);
			return new TerminalLine(command, output);
		} catch (error) {
			const command = new TerminalCommand(commandText);
			const output = new TerminalOutput('Error loading experiences');
			return new TerminalLine(command, output);
		}
	}
}

export class TerminalLineCollection {
	private readonly lines: TerminalLine[];

	constructor(lines: TerminalLine[]) {
		this.lines = [...lines];
	}

	getLines(): TerminalLine[] {
		return [...this.lines];
	}

	getCommands(): string[] {
		return this.lines.map(line => line.getCommand().getValue());
	}

	getOutputs(): string[] {
		return this.lines.map(line => line.getOutput().getContent());
	}

	static createDefaultLines(t: TFunction): TerminalLineCollection {
		const lines: TerminalLine[] = [
			TerminalLine.createFromTranslation(
				'whoami',
				'retroTerminal.whoami',
				'Carlos Daniel',
				t,
			),
			TerminalLine.createFromTranslation(
				'pwd',
				'retroTerminal.pwd',
				'/home/user/projects/portfolio',
				t,
			),
			TerminalLine.createFromTranslationArray(
				'cat skills.txt',
				[
					{
						key: 'retroTerminal.skills.frontend',
						defaultValue: 'Frontend: React, TypeScript, styled-components',
					},
					{
						key: 'retroTerminal.skills.backend',
						defaultValue: 'Backend: Node.js, Express, MongoDB',
					},
					{
						key: 'retroTerminal.skills.devops',
						defaultValue: 'DevOps: Docker, AWS',
					},
					{
						key: 'retroTerminal.skills.others',
						defaultValue: 'Others: Git, GraphQL, Tests',
					},
				],
				t,
			),
			TerminalLine.createFromExperiences('cat experience.txt', t),
			TerminalLine.createFromTranslationArray(
				'ls -la projects/',
				[
					{
						key: 'retroTerminal.projects.total',
						defaultValue: 'total 4',
					},
					{
						key: 'retroTerminal.projects.dir1',
						defaultValue:
							'drwxr-xr-x  2 carlosdaniel users 4096 Jun 10 09:45 .',
					},
					{
						key: 'retroTerminal.projects.dir2',
						defaultValue:
							'drwxr-xr-x 19 carlosdaniel users 4096 Jun 10 09:45 ..',
					},
					{
						key: 'retroTerminal.projects.file1',
						defaultValue:
							'-rw-r--r--  1 carlosdaniel users  507 Jun 10 09:45 project1.md',
					},
					{
						key: 'retroTerminal.projects.file2',
						defaultValue:
							'-rw-r--r--  1 carlosdaniel users  721 Jun 10 09:45 project2.md',
					},
					{
						key: 'retroTerminal.projects.file3',
						defaultValue:
							'-rw-r--r--  1 carlosdaniel users  612 Jun 10 09:45 project3.md',
					},
				],
				t,
			),
			TerminalLine.createFromTranslation(
				'echo $CONTACT_INFO',
				'retroTerminal.contactInfo',
				'Email: hello@carlosdaniel.dev | GitHub: github.com/devcarlosdaniel',
				t,
			),
		];

		return new TerminalLineCollection(lines);
	}
}
