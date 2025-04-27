import styled, { keyframes } from 'styled-components';

const blinkCursor = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

const scanlineAnimation = keyframes`
  0% { transform: translateY(0); }
  100% { transform: translateY(100%); }
`;

export const TerminalWrapper = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.palette.terminal || '#0c0c0c'};
	border-radius: 5px;
	border: 1px solid
		${({ theme }) =>
			theme.title === 'win98'
				? theme.palette.buttonHighlight || '#FFFFFF'
				: theme.palette.primary || '#4ecca3'};
	padding: 20px;
	font-family: 'Courier New', monospace;
	color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.terminalText || '#FFFFFF'
			: theme.palette.glowText || '#4ecca3'};
	margin: 30px 0;
	box-shadow: 0 0 10px rgba(78, 204, 163, 0.2);
	overflow: hidden;
	width: 100%;
	min-height: 500px;
	max-height: 80vh;
	overflow-y: auto;

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

export const TerminalHeader = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 15px;
	padding-bottom: 10px;
	border-bottom: 1px solid ${({ theme }) => theme.palette.primary || '#4ecca3'};
`;

export const TerminalTitle = styled.div`
	font-size: 1.4rem;
	font-weight: bold;
	color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.terminalText || '#FFFFFF'
			: theme.palette.primary || '#4ecca3'};
`;

export const TerminalContent = styled.div`
	line-height: 1.5;
`;

export const TerminalPrompt = styled.div`
	display: flex;
	margin-bottom: 8px;
`;

export const PromptUser = styled.span`
	color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.terminalPrompt || '#00FF00'
			: theme.palette.primary || '#4ecca3'};
	margin-right: 8px;
`;

export const PromptLocation = styled.span`
	color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.terminalPrompt || '#00FF00'
			: theme.palette.secondary || '#a9b7c6'};
	margin-right: 8px;
`;

export const PromptChar = styled.span`
	color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.terminalPrompt || '#00FF00'
			: 'white'};
	margin-right: 8px;
`;

export const CommandOutput = styled.pre`
	margin: 0;
	white-space: pre-wrap;
	word-break: break-word;
	margin-bottom: 15px;
	margin-left: 16px;
	color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.terminalText || '#FFFFFF'
			: 'inherit'};
`;

export const InputContainer = styled.div`
	position: relative;
	flex: 1;
	display: flex;
`;

export const CommandInput = styled.input`
	background: transparent;
	border: none;
	color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.terminalCommand || '#FFFF00'
			: theme.palette.glowText || '#4ecca3'};
	font-family: 'Courier New', monospace;
	font-size: 1rem;
	caret-color: transparent;
	flex: 1;
	outline: none;
	width: 100%;
`;

export const Cursor = styled.span<{ position: number }>`
	display: inline-block;
	position: absolute;
	width: 8px;
	height: 15px;
	background-color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.terminalCommand || '#FFFF00'
			: theme.palette.glowText || '#4ecca3'};
	animation: ${blinkCursor} 1s infinite;
	top: 4px;
	left: ${props => `${props.position}ch`};
	z-index: 2;
`;

export const ClickMessage = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;
	opacity: 0.5;
	font-size: 0.8rem;
	color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.terminalText || '#FFFFFF'
			: theme.palette.glowText || '#4ecca3'};
`;

export const HelpText = styled.div`
	margin-top: 10px;
	font-size: 0.9rem;
	color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.terminalText || '#FFFFFF'
			: theme.palette.secondary || '#a9b7c6'};
	text-align: center;
`;
