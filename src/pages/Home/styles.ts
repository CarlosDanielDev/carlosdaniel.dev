import styled, { keyframes } from 'styled-components';

const terminalBlink = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
`;

export const Wrapper = styled.div`
	margin-top: 48px;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 32px;
	background: ${({ theme }) => theme.palette.windowBg};
	padding: 32px;
	position: relative;
	border-radius: 8px;
	border: 2px solid;
	border-color: ${({ theme }) => theme.palette.buttonHighlight}
		${({ theme }) => theme.palette.buttonShadow}
		${({ theme }) => theme.palette.buttonShadow}
		${({ theme }) => theme.palette.buttonHighlight};
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
	max-width: 900px;
	margin-left: auto;
	margin-right: auto;
	font-family: 'Courier New', monospace;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		height: 2px;
		background: repeating-linear-gradient(
			90deg,
			transparent,
			transparent 2px,
			${({ theme }) => theme.palette.primary}88 2px,
			${({ theme }) => theme.palette.primary}88 4px
		);
	}

	@media screen and (max-width: 768px) {
		margin-top: 24px;
		padding: 20px;
		gap: 24px;
	}
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 16px;
	position: relative;
	z-index: 1;
	width: 100%;
	padding: 8px;

	&:not(:last-child) {
		border-bottom: 1px dashed ${({ theme }) => theme.palette.buttonShadow};
		padding-bottom: 24px;
		margin-bottom: 8px;
	}
`;

export const Title = styled.h1`
	font-size: 2.4rem;
	font-weight: bold;
	padding: 12px 16px;
	font-family: 'Courier New', monospace;
	display: flex;
	align-items: center;
	letter-spacing: 0.5px;
	border-radius: 4px;
	position: relative;
	background: transparent;
	color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.windowHeader || '#000080'
			: theme.palette.title};
	margin-bottom: 16px;

	&::before {
		content: '>';
		display: inline-block;
		margin-right: 12px;
		color: ${({ theme }) => theme.palette.primary};
		animation: ${terminalBlink} 1.2s step-end infinite;
		font-weight: bold;
	}

	&::after {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		background: ${({ theme }) => theme.palette.primary};
	}
`;

export const Paragraph = styled.p`
	color: ${({ theme }) => theme.palette.buttonText};
	font-size: 1.6rem;
	line-height: 1.8;
	padding: 4px;
	letter-spacing: 0.3px;
	font-family: 'Courier New', monospace;
	position: relative;
	padding-left: 24px;

	&::before {
		content: '_';
		position: absolute;
		left: 8px;
		color: ${({ theme }) => theme.palette.secondary};
	}

	@media screen and (max-width: 576px) {
		font-size: 1.4rem;
	}
`;

export const ExperienceList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 20px;
`;

export const ExperienceItem = styled.li`
	background: ${({ theme }) => theme.palette.windowBg};
	padding: 20px;
	border-radius: 4px;
	border: 1px solid;
	border-color: ${({ theme }) => theme.palette.buttonShadow}
		${({ theme }) => theme.palette.buttonHighlight}
		${({ theme }) => theme.palette.buttonHighlight}
		${({ theme }) => theme.palette.buttonShadow};
	display: flex;
	flex-direction: column;
	gap: 16px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
	transition: all 0.3s ease;
	position: relative;

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
	}

	&::before {
		content: '';
		position: absolute;
		top: -1px;
		left: -1px;
		right: -1px;
		height: 4px;
		background: ${({ theme }) => theme.palette.primary};
		border-radius: 4px 4px 0 0;
	}
`;

export const ExperienceDate = styled.span`
	color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.terminalText || '#FFFFFF'
			: theme.palette.textColorPrimary};
	font-size: 1.1rem;
	font-weight: bold;
	background-color: ${({ theme }) => theme.palette.primary};
	padding: 4px 12px;
	border-radius: 3px;
	font-family: 'Courier New', monospace;
	display: inline-block;
	width: fit-content;
	position: relative;

	&::before {
		content: '[';
		margin-right: 4px;
	}

	&::after {
		content: ']';
		margin-left: 4px;
	}
`;

export const ExperienceName = styled.a`
	color: ${({ theme }) =>
		theme.title === 'win98'
			? theme.palette.windowHeader || '#000080'
			: theme.palette.title};
	font-size: 1.8rem;
	font-weight: bold;
	text-decoration: none;
	padding: 4px;
	transition: all 0.2s ease;
	font-family: 'Courier New', monospace;
	position: relative;
	display: inline-block;

	&::after {
		content: '';
		position: absolute;
		width: 100%;
		height: 1px;
		bottom: 0;
		left: 0;
		background-color: ${({ theme }) => theme.palette.primary};
		transform: scaleX(0);
		transform-origin: bottom right;
		transition: transform 0.3s ease;
	}

	&:hover {
		color: ${({ theme }) => theme.palette.primary};

		&::after {
			transform: scaleX(1);
			transform-origin: bottom left;
		}
	}
`;

export const ProjectPreview = styled.div`
	margin-top: 12px;
	padding: 16px;
	border-radius: 3px;
	border-left: 3px solid ${({ theme }) => theme.palette.primary};
	background: ${({ theme }) => theme.palette.windowBg};
	position: relative;

	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		width: 1px;
		background: linear-gradient(
			to bottom,
			${({ theme }) => theme.palette.primary}00,
			${({ theme }) => theme.palette.primary}55,
			${({ theme }) => theme.palette.primary}00
		);
	}
`;

export const ProjectLink = styled.a`
	color: ${({ theme }) => theme.palette.primary};
	font-weight: bold;
	text-decoration: none;
	font-size: 1.5rem;
	display: inline-block;
	margin-bottom: 8px;
	transition: all 0.2s ease;
	font-family: 'Courier New', monospace;
	position: relative;

	&::before {
		content: '> ';
		opacity: 0;
		transition: opacity 0.2s ease;
	}

	&:hover {
		color: ${({ theme }) => theme.palette.title};

		&::before {
			opacity: 1;
		}
	}
`;

export const Status = styled.span`
	display: block;
	margin-top: 8px;
	color: ${({ theme }) => theme.palette.secondary};
	font-size: 1.1rem;
	font-style: italic;
	padding: 4px 8px;
	border-left: 3px solid ${({ theme }) => theme.palette.primary};
	font-family: 'Courier New', monospace;
	background: ${({ theme }) => theme.palette.background}22;
`;

export const TerminalLink = styled.div`
	margin-top: 20px;
	display: flex;
	gap: 32px;

	a {
		color: ${({ theme }) => theme.palette.primary};
		text-decoration: none;
		font-weight: bold;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			width: 0;
			height: 2px;
			bottom: -4px;
			left: 0;
			background-color: ${({ theme }) => theme.palette.primary};
			transition: width 0.3s ease;
		}

		&:hover::after {
			width: 100%;
		}
	}
`;
