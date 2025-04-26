import styled, { keyframes, css } from 'styled-components';
import {
	enhancedNeonPulse,
	matrixRain,
	flicker,
	enhancedGlitch,
} from 'src/styles/animations';

const blink = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const typewriter = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const boot = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

export const CornerEffectBox = styled.div<{
	isY2K: boolean;
	isCyberpunk: boolean;
}>`
	position: absolute;
	right: 8px;
	top: 8px;
	background: ${({ theme }) => theme.palette.primary};
	width: 12px;
	height: 12px;
	z-index: 1;
	border-radius: 50%;

	${({ isY2K }) =>
		isY2K &&
		css`
			animation: ${blink} 1s infinite;
		`}

	${({ isCyberpunk }) =>
		isCyberpunk &&
		css`
			background: transparent;
			border: 2px solid ${({ theme }) => theme.palette.accent2};
			box-shadow: 0 0 10px ${({ theme }) => theme.palette.accent2},
				0 0 20px ${({ theme }) => theme.palette.accent2};
			animation: ${flicker} 3s infinite;
		`}
`;

export const MatrixContainer = styled.div`
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
	width: 50px;
	overflow: hidden;
	pointer-events: none;
	z-index: 0;
`;

export const MatrixCharacter = styled.div`
	position: absolute;
	color: ${({ theme }) => theme.palette.accent4 || '#00CC40'};
	font-size: 16px;
	font-family: 'Courier New', monospace;
	width: 16px;
	opacity: 0.8;
	animation: ${matrixRain} 8s linear infinite;
	animation-delay: ${() => Math.random() * 5}s;
	left: ${() => Math.floor(Math.random() * 50)}px;
	text-shadow: 0 0 5px ${({ theme }) => theme.palette.accent4 || '#00CC40'};
`;

export const GlitchEffect = styled.div`
	position: absolute;
	z-index: 2;
	left: 12px;
	top: 12px;
	font-size: 14px;
	color: ${({ theme }) => theme.palette.accent1};
	text-shadow: 0 0 5px ${({ theme }) => theme.palette.accent1};
	animation: ${enhancedGlitch} 3s infinite,
		${enhancedNeonPulse} 2s infinite alternate;
	font-family: 'Courier New', monospace;
`;

export const BootSequence = styled.div`
	position: absolute;
	top: 10px;
	left: 10px;
	z-index: 2;
	font-family: 'Courier New', monospace;
	font-size: 14px;
	color: ${({ theme }) => theme.palette.primary};
	animation: ${boot} 1s ease forwards;
	width: 100%;
	max-width: 300px;
`;

export const TerminalLine = styled.div<{ delay: number }>`
	overflow: hidden;
	white-space: nowrap;
	margin-bottom: 8px;
	animation: ${typewriter} 2s steps(40, end) forwards;
	animation-delay: ${({ delay }) => delay}s;
	opacity: 0;
	animation-fill-mode: forwards;
	position: relative;

	&::before {
		content: '>';
		margin-right: 8px;
		color: ${({ theme }) => theme.palette.primary};
	}

	&::after {
		content: '|';
		position: absolute;
		right: 0;
		animation: ${blink} 1s step-end infinite;
	}
`;

export const RetroScanline = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(
		to bottom,
		transparent,
		transparent 50%,
		rgba(0, 0, 0, 0.05) 50%,
		rgba(0, 0, 0, 0.05)
	);
	background-size: 100% 4px;
	pointer-events: none;
	z-index: 1;
	opacity: 0.3;
`;
