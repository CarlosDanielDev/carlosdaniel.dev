import React, { useState, useEffect, useRef, KeyboardEvent } from 'react';
import { useTranslation } from 'react-i18next';
import { TerminalServiceFactory } from 'src/application/terminal/TerminalServiceFactory';
import { TerminalService } from 'src/application/terminal/TerminalService';
import { TerminalLine } from 'src/domain/terminal/TerminalLine';
import * as S from './styles';

interface RetroTerminalViewProps {
	className?: string;
}

export const RetroTerminalView: React.FC<RetroTerminalViewProps> = ({
	className,
}) => {
	const { t } = useTranslation();
	const [terminalService] = useState<TerminalService>(() =>
		TerminalServiceFactory.create(t),
	);
	const [history, setHistory] = useState<TerminalLine[]>([]);
	const [commandInput, setCommandInput] = useState('');
	const [focused, setFocused] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const terminalRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setHistory(terminalService.getHistory());
	}, [terminalService]);

	useEffect(() => {
		if (focused && terminalRef.current) {
			terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
		}
	}, [history, focused]);

	const executeCommand = () => {
		if (commandInput.trim()) {
			terminalService.executeCommand(commandInput);
			setCommandInput('');
			setHistory(terminalService.getHistory());
		}
	};

	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') {
			executeCommand();
		}
	};

	return (
		<S.TerminalWrapper
			onClick={() => {
				setFocused(true);
				inputRef.current?.focus();
			}}
			ref={terminalRef}
			className={className}
		>
			<S.TerminalHeader>
				<S.TerminalTitle>
					{t('terminal.headerTitle', 'terminal@carlosdaniel:~')}
				</S.TerminalTitle>
			</S.TerminalHeader>
			<S.TerminalContent>
				{history.map((entry, index) => (
					// eslint-disable-next-line react/no-array-index-key
					<div key={`${index}-${entry.getCommandValue()}`}>
						{!entry.getCommandValue() ? null : (
							<S.TerminalPrompt>
								<S.PromptUser>
									{t('terminal.promptUser', 'carlosdaniel')}
								</S.PromptUser>
								<S.PromptLocation>
									{t('terminal.promptLocation', '~')}
								</S.PromptLocation>
								<S.PromptChar>$</S.PromptChar>
								<span>{entry.getCommandValue()}</span>
							</S.TerminalPrompt>
						)}
						<S.CommandOutput>{entry.getOutput()}</S.CommandOutput>
					</div>
				))}
				<S.TerminalPrompt>
					<S.PromptUser>
						{t('terminal.promptUser', 'carlosdaniel')}
					</S.PromptUser>
					<S.PromptLocation>
						{t('terminal.promptLocation', '~')}
					</S.PromptLocation>
					<S.PromptChar>$</S.PromptChar>
					<S.InputContainer>
						<S.CommandInput
							ref={inputRef}
							type="text"
							value={commandInput}
							onChange={e => setCommandInput(e.target.value)}
							onKeyDown={handleKeyDown}
							onBlur={() => setFocused(false)}
							autoFocus
						/>
						{focused && <S.Cursor position={commandInput.length} />}
					</S.InputContainer>
				</S.TerminalPrompt>
			</S.TerminalContent>
			{!focused && (
				<S.ClickMessage>
					{t('terminal.clickToFocus', 'Click to focus')}
				</S.ClickMessage>
			)}
		</S.TerminalWrapper>
	);
};
