import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { CenteredContainer } from 'src/components/container';
import * as S from './styles';

interface TerminalEntry {
	command: string;
	output: string;
}

interface TerminalState {
	history: TerminalEntry[];
	commandInput: string;
	focused: boolean;
}

class TerminalManager {
	private state: TerminalState;

	private setState: React.Dispatch<React.SetStateAction<TerminalState>>;

	private commands: Record<string, () => string | null>;

	private t: (key: string, defaultValue?: string) => string;

	private inputRef: React.RefObject<HTMLInputElement>;

	private window: Window;

	constructor(
		initialState: TerminalState,
		setState: React.Dispatch<React.SetStateAction<TerminalState>>,
		t: (key: string, defaultValue?: string) => string,
		inputRef: React.RefObject<HTMLInputElement>,
	) {
		this.state = initialState;
		this.setState = setState;
		this.t = t;
		this.inputRef = inputRef;
		this.window = window;
		const helpText = this.getHelpText();
		const availableTexts = {
			help: helpText,
			whoami: t('terminal.whoami', 'Carlos Daniel - Frontend Developer'),
			skills: t(
				'terminal.skills',
				'Frontend: React, TypeScript, Next.js\nBackend: Node.js, Express\nOther: Git, Docker, AWS',
			),
			projects: t(
				'terminal.projects',
				'1. Personal Website - This website\n2. E-commerce Platform - React + Node.js\n3. Task Management App - React Native\n4. Data Visualization Dashboard - D3.js + React',
			),
			experience: t(
				'terminal.experience',
				'Senior Frontend Developer @ NiceCompany (2020-Present)\nFrontend Developer @ OtherCompany (2018-2020)\nJunior Developer @ StartupName (2017-2018)',
			),
			contact: t(
				'terminal.contact',
				'Email: hello@carlosdaniel.dev\nGitHub: github.com/devcarlosdaniel',
			),
			home: t('terminal.home', 'Redirecting to standard view...'),
			ls: t(
				'terminal.ls',
				'whoami\nskills\nprojects\nexperience\ncontact\nhelp\nhome\nclear',
			),
		};

		this.commands = {
			help: () => availableTexts.help,
			ls: () => availableTexts.ls,
			clear: () => this.clearHistory(),
			home: () => this.redirectHome(availableTexts.home),
			whoami: () => availableTexts.whoami,
			skills: () => availableTexts.skills,
			projects: () => availableTexts.projects,
			experience: () => availableTexts.experience,
			contact: () => availableTexts.contact,
		};
	}

	private getHelpText(): string {
		return `Comandos disponíveis:
- whoami: ${this.t('terminal.commands.whoami', 'Quem sou eu')}
- skills: ${this.t('terminal.commands.skills', 'Minhas habilidades')}
- projects: ${this.t('terminal.commands.projects', 'Projetos em que trabalhei')}
- experience: ${this.t(
			'terminal.commands.experience',
			'Minha experiência profissional',
		)}
- contact: ${this.t('terminal.commands.contact', 'Informações de contato')}
- ls: ${this.t('terminal.commands.ls', 'Listar comandos disponíveis')}
- clear: ${this.t('terminal.commands.clear', 'Limpar terminal')}
- home: ${this.t('terminal.commands.home', 'Voltar para a página inicial')}`;
	}

	private updateState(newState: Partial<TerminalState>): void {
		this.setState(prevState => {
			const updatedState = { ...prevState, ...newState };
			this.state = updatedState;
			return updatedState;
		});
	}

	private addToHistory(command: string, output: string): void {
		this.updateState({
			history: [...this.state.history, { command, output }],
		});
	}

	private clearHistory(): null {
		this.updateState({ history: [] });
		return null;
	}

	private redirectHome(message: string): string {
		setTimeout(() => {
			this.window.location.href = '/';
		}, 1500);
		return message;
	}

	public executeCommand(command: string): void {
		const cmd = command.trim().toLowerCase();

		if (cmd === '') return;

		if (this.commands[cmd]) {
			const output = this.commands[cmd]();

			if (output === null) return;

			this.addToHistory(command, output);
		} else {
			this.addToHistory(
				command,
				`${cmd}: command not found. Type 'help' for available commands.`,
			);
		}

		this.updateState({ commandInput: '' });
	}

	public handleKeyDown(e: KeyboardEvent<HTMLInputElement>): void {
		if (e.key === 'Enter') {
			this.executeCommand(this.state.commandInput);
		}
	}

	public focusInput(): void {
		this.updateState({ focused: true });
		this.inputRef.current?.focus();
	}

	public updateCommandInput(value: string): void {
		this.updateState({ commandInput: value });
	}

	public blurInput(): void {
		this.updateState({ focused: false });
	}

	public initializeWelcomeMessage(): void {
		if (this.state.history.length === 0) {
			this.updateState({
				history: [
					{
						command: '',
						output: `Welcome to the interactive terminal!\nType 'help' to see available commands.`,
					},
				],
			});
		}
	}
}

export const Terminal: React.FC = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const terminalRef = useRef<HTMLDivElement>(null);

	const { t } = useTranslation();

	const [state, setState] = useState<TerminalState>({
		history: [],
		commandInput: '',
		focused: false,
	});

	const terminalManager = useRef(
		new TerminalManager(state, setState, t, inputRef),
	).current;

	useEffect(() => {
		if (state.focused && terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
		}
	}, [state.history, state.focused]);

	useEffect(() => {
		terminalManager.initializeWelcomeMessage();
	}, [terminalManager]);

	return (
		<CenteredContainer>
			<S.TerminalWrapper
				onClick={() => terminalManager.focusInput()}
				ref={terminalRef}
			>
				<S.TerminalHeader>
					<S.TerminalTitle>terminal@carlosdaniel:~</S.TerminalTitle>
				</S.TerminalHeader>
				<S.TerminalContent>
					{state.history.map((entry, index) => (
						// eslint-disable-next-line react/no-array-index-key
						<div key={`${index}-${entry.command}`}>
							{entry.command && (
								<S.TerminalPrompt>
									<S.PromptUser>carlosdaniel</S.PromptUser>
									<S.PromptLocation>~</S.PromptLocation>
									<S.PromptChar>$</S.PromptChar>
									<span>{entry.command}</span>
								</S.TerminalPrompt>
							)}
							<S.CommandOutput>{entry.output}</S.CommandOutput>
						</div>
					))}
					<S.TerminalPrompt>
						<S.PromptUser>carlosdaniel</S.PromptUser>
						<S.PromptLocation>~</S.PromptLocation>
						<S.PromptChar>$</S.PromptChar>
						<S.InputContainer>
							<S.CommandInput
								ref={inputRef}
								type="text"
								value={state.commandInput}
								onChange={e =>
									terminalManager.updateCommandInput(e.target.value)
								}
								onKeyDown={e => terminalManager.handleKeyDown(e)}
								onBlur={() => terminalManager.blurInput()}
								autoFocus
							/>
							{state.focused && (
								<S.Cursor position={state.commandInput.length} />
							)}
						</S.InputContainer>
					</S.TerminalPrompt>
				</S.TerminalContent>
				{!state.focused && <S.ClickMessage>Click to focus</S.ClickMessage>}
			</S.TerminalWrapper>
			<S.HelpText>
				{t(
					'terminal.instructions',
					'Type commands to interact with the terminal. Try "help" to see available commands.',
				)}
			</S.HelpText>
		</CenteredContainer>
	);
};
