/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useRef } from 'react';
import * as S from './styles';

interface RetroTerminalProps {
	className?: string;
}

export const RetroTerminal: React.FC<RetroTerminalProps> = ({ className }) => {
	const [visibleLines, setVisibleLines] = useState<string[]>([]);
	const [currentLineIndex, setCurrentLineIndex] = useState(0);
	const [currentCharIndex, setCurrentCharIndex] = useState(0);
	const [showCursor, setShowCursor] = useState(true);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);

	const terminalLines = [
		{
			command: 'whoami',
			output: 'Carlos Daniel',
		},
		{
			command: 'pwd',
			output: '/home/user/projects/portfolio',
		},
		{
			command: 'cat skills.txt',
			output: [
				'Frontend: React, TypeScript, styled-components',
				'Backend: Node.js, Express, MongoDB',
				'DevOps: Docker, AWS',
				'Other: Git, GraphQL, Testing',
			].join('\n'),
		},
		{
			command: 'ls -la projects/',
			output: [
				'total 4',
				'drwxr-xr-x  2 carlosdaniel users 4096 Jun 10 09:45 .',
				'drwxr-xr-x 19 carlosdaniel users 4096 Jun 10 09:45 ..',
				'-rw-r--r--  1 carlosdaniel users  507 Jun 10 09:45 project1.md',
				'-rw-r--r--  1 carlosdaniel users  721 Jun 10 09:45 project2.md',
				'-rw-r--r--  1 carlosdaniel users  612 Jun 10 09:45 project3.md',
			].join('\n'),
		},
		{
			command: 'echo $CONTACT_INFO',
			output:
				'Email: hello@carlosdaniel.dev | GitHub: github.com/devcarlosdaniel',
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
				<S.TerminalTitle>terminal@carlosdaniel:~</S.TerminalTitle>
			</S.TerminalHeader>
			<S.TerminalContent>
				{visibleLines.map((line, index) => {
					// Even indexes are commands, odd indexes are outputs
					if (index % 2 === 0) {
						return (
							<S.TerminalPrompt key={index}>
								<S.PromptUser>carlosdaniel</S.PromptUser>
								<S.PromptLocation>~</S.PromptLocation>
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
						<S.PromptUser>carlosdaniel</S.PromptUser>
						<S.PromptLocation>~</S.PromptLocation>
						<S.PromptChar>$</S.PromptChar>
						{showCursor && <S.Cursor />}
					</S.TerminalPrompt>
				)}
			</S.TerminalContent>
		</S.TerminalWrapper>
	);
};
