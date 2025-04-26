/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';

const blinkCursor = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const scanlineAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
`;

const TerminalWrapper = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.palette.terminal || '#0c0c0c'};
	border-radius: 5px;
	border: 1px solid ${({ theme }) => theme.palette.primary || '#4ecca3'};
	padding: 20px;
	font-family: 'Courier New', monospace;
	color: ${({ theme }) => theme.palette.glowText || '#4ecca3'};
	margin: 30px 0;
	box-shadow: 0 0 10px rgba(78, 204, 163, 0.2);
	overflow: hidden;
	width: 100%;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: linear-gradient(transparent 50%, rgba(78, 204, 163, 0.03) 50%);
		background-size: 100% 4px;
		pointer-events: none;
		z-index: 1;
	}

	&::after {
		content: '';
		position: absolute;
		height: 5px;
		width: 100%;
		left: 0;
		top: 0;
		background: rgba(78, 204, 163, 0.1);
		animation: ${scanlineAnimation} 5s linear infinite;
		z-index: 2;
	}
`;

const TerminalHeader = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	padding-bottom: 10px;
	border-bottom: 1px solid ${({ theme }) => theme.palette.primary || '#4ecca3'};
`;

const TerminalTitle = styled.div`
	font-size: 1.4rem;
	font-weight: bold;
	color: ${({ theme }) => theme.palette.primary || '#4ecca3'};
`;

const TerminalContent = styled.div`
	line-height: 1.5;
`;

const TerminalPrompt = styled.div`
	display: flex;
	margin-bottom: 8px;
`;

const PromptUser = styled.span`
	color: ${({ theme }) => theme.palette.primary || '#4ecca3'};
	margin-right: 8px;
`;

const PromptLocation = styled.span`
	color: ${({ theme }) => theme.palette.secondary || '#a9b7c6'};
	margin-right: 8px;
`;

const PromptChar = styled.span`
	color: white;
	margin-right: 8px;
`;

const TerminalLine = styled.div`
	margin-bottom: 8px;
	display: flex;
	flex-wrap: wrap;
`;

const CommandOutput = styled.pre`
	margin: 0;
	white-space: pre-wrap;
	word-break: break-word;
	margin-bottom: 15px;
	margin-left: 16px;
`;

const Cursor = styled.span`
	display: inline-block;
	width: 8px;
	height: 15px;
	background-color: ${({ theme }) => theme.palette.glowText || '#4ecca3'};
	margin-left: 4px;
	animation: ${blinkCursor} 1s infinite;
`;

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
		<TerminalWrapper className={className}>
			<TerminalHeader>
				<TerminalTitle>terminal@carlosdaniel:~</TerminalTitle>
			</TerminalHeader>
			<TerminalContent>
				{visibleLines.map((line, index) => {
					// Even indexes are commands, odd indexes are outputs
					if (index % 2 === 0) {
						return (
							<TerminalPrompt key={index}>
								<PromptUser>carlosdaniel</PromptUser>
								<PromptLocation>~</PromptLocation>
								<PromptChar>$</PromptChar>
								<TerminalLine>{line}</TerminalLine>
								{index === currentLineIndex && showCursor && <Cursor />}
							</TerminalPrompt>
						);
					}
					// eslint-disable-next-line react/no-array-index-key
					return <CommandOutput key={index}>{line}</CommandOutput>;
				})}
				{currentLineIndex >= commands.length * 2 && (
					<TerminalPrompt>
						<PromptUser>carlosdaniel</PromptUser>
						<PromptLocation>~</PromptLocation>
						<PromptChar>$</PromptChar>
						{showCursor && <Cursor />}
					</TerminalPrompt>
				)}
			</TerminalContent>
		</TerminalWrapper>
	);
};
