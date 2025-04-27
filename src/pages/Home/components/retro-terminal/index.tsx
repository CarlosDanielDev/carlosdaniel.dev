/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

interface RetroTerminalProps {
	className?: string;
}

export const RetroTerminal: React.FC<RetroTerminalProps> = ({ className }) => {
	const { t } = useTranslation();
	const [visibleLines, setVisibleLines] = useState<string[]>([]);
	const [currentLineIndex, setCurrentLineIndex] = useState(0);
	const [currentCharIndex, setCurrentCharIndex] = useState(0);
	const [showCursor, setShowCursor] = useState(true);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const terminalLines = [
		{
			command: 'whoami',
			output: t('retroTerminal.whoami', 'Carlos Daniel'),
		},
		{
			command: 'pwd',
			output: t('retroTerminal.pwd', '/home/user/projects/portfolio'),
		},
		{
			command: 'cat skills.txt',
			output: [
				t(
					'retroTerminal.skills.frontend',
					'Frontend: React, TypeScript, styled-components',
				),
				t('retroTerminal.skills.backend', 'Backend: Node.js, Express, MongoDB'),
				t('retroTerminal.skills.devops', 'DevOps: Docker, AWS'),
				t('retroTerminal.skills.others', 'Outros: Git, GraphQL, Testes'),
			].join('\n'),
		},
		{
			command: 'ls -la projects/',
			output: [
				t('retroTerminal.projects.total', 'total 4'),
				t(
					'retroTerminal.projects.dir1',
					'drwxr-xr-x  2 carlosdaniel users 4096 Jun 10 09:45 .',
				),
				t(
					'retroTerminal.projects.dir2',
					'drwxr-xr-x 19 carlosdaniel users 4096 Jun 10 09:45 ..',
				),
				t(
					'retroTerminal.projects.file1',
					'-rw-r--r--  1 carlosdaniel users  507 Jun 10 09:45 project1.md',
				),
				t(
					'retroTerminal.projects.file2',
					'-rw-r--r--  1 carlosdaniel users  721 Jun 10 09:45 project2.md',
				),
				t(
					'retroTerminal.projects.file3',
					'-rw-r--r--  1 carlosdaniel users  612 Jun 10 09:45 project3.md',
				),
			].join('\n'),
		},
		{
			command: 'echo $CONTACT_INFO',
			output: t(
				'retroTerminal.contactInfo',
				'Email: hello@carlosdaniel.dev | GitHub: github.com/devcarlosdaniel',
			),
		},
	];

	const commands = terminalLines.map(line => line.command);
	const outputs = terminalLines.map(line => line.output);

	useEffect(() => {
		const typeNextChar = () => {
			if (currentLineIndex >= commands.length * 2) {
				setShowCursor(true);
				return;
			}

			if (currentLineIndex % 2 === 0) {
				const currentCommand = commands[currentLineIndex / 2];

				if (currentCharIndex < currentCommand.length) {
					setVisibleLines(prev => {
						const newLines = [...prev];
						newLines[currentLineIndex] = currentCommand.substring(
							0,
							currentCharIndex + 1,
						);
						return newLines;
					});
					setCurrentCharIndex(prev => prev + 1);

					timeoutRef.current = setTimeout(
						typeNextChar,
						Math.random() * 100 + 50,
					);
				} else {
					setCurrentCharIndex(0);
					setCurrentLineIndex(prev => prev + 1);

					timeoutRef.current = setTimeout(typeNextChar, 500);
				}
			} else {
				setVisibleLines(prev => {
					const newLines = [...prev];
					newLines[currentLineIndex] = outputs[(currentLineIndex - 1) / 2];
					return newLines;
				});

				setCurrentCharIndex(0);
				setCurrentLineIndex(prev => prev + 1);

				timeoutRef.current = setTimeout(typeNextChar, 1000);
			}
		};

		timeoutRef.current = setTimeout(typeNextChar, 1000);

		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, [currentLineIndex, currentCharIndex, commands, outputs]);

	return (
		<S.TerminalWrapper className={className}>
			<S.TerminalHeader>
				<S.TerminalTitle>
					{t('retroTerminal.title', 'terminal@carlosdaniel:~')}
				</S.TerminalTitle>
			</S.TerminalHeader>
			<S.TerminalContent>
				{visibleLines.map((line, index) => {
					// Even indexes are commands, odd indexes are outputs
					if (index % 2 === 0) {
						return (
							<S.TerminalPrompt key={index}>
								<S.PromptUser>
									{t('retroTerminal.promptUser', 'carlosdaniel')}
								</S.PromptUser>
								<S.PromptLocation>
									{t('retroTerminal.promptLocation', '~')}
								</S.PromptLocation>
								<S.PromptChar>$</S.PromptChar>
								<S.TerminalLine>{line}</S.TerminalLine>
								{index === currentLineIndex && showCursor && <S.Cursor />}
							</S.TerminalPrompt>
						);
					}
					// eslint-disable-next-line react/no-array-index-key
					return <S.CommandOutput key={index}>{line}</S.CommandOutput>;
				})}
				{currentLineIndex >= commands.length * 2 && (
					<S.TerminalPrompt>
						<S.PromptUser>
							{t('retroTerminal.promptUser', 'carlosdaniel')}
						</S.PromptUser>
						<S.PromptLocation>
							{t('retroTerminal.promptLocation', '~')}
						</S.PromptLocation>
						<S.PromptChar>$</S.PromptChar>
						{showCursor && <S.Cursor />}
					</S.TerminalPrompt>
				)}
			</S.TerminalContent>
		</S.TerminalWrapper>
	);
};
