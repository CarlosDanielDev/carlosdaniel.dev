import { breakpointLandscape } from 'src/constants';
import styled, { css } from 'styled-components';

export const Container = styled.footer`
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.palette.background || 'transparent'};
	width: 100%;
	border-top: 2px solid;
	border-color: ${({ theme }) => theme.palette.buttonHighlight}
		${({ theme }) => theme.palette.buttonShadow}
		${({ theme }) => theme.palette.buttonShadow}
		${({ theme }) => theme.palette.buttonHighlight};
	padding: 8px;
	height: auto;
	min-height: 40px;
	position: relative;
	z-index: 10;
	margin-top: auto;

	${({ theme }) =>
		theme?.title === 'cyberpunk' &&
		css`
			background: ${theme?.palette.background};
			border-top: 1px solid ${theme?.palette.accent2};
			box-shadow: 0 -5px 15px rgba(0, 221, 255, 0.2);
		`}
`;

export const InfoFooter = styled.div`
	color: ${({ theme }) =>
		theme.title === 'light'
			? theme.palette.buttonText
			: theme.palette.textColorPrimary || theme.palette.buttonText};
	font-size: 1.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 8px;

	@media (max-width: ${breakpointLandscape}px) {
		font-size: 1rem;
		flex-direction: column;
		gap: 2px;
	}
`;

export const FooterText = styled.span`
	position: relative;
	padding-left: 20px;
	color: ${({ theme }) =>
		theme.title === 'light'
			? theme.palette.buttonText
			: theme.palette.textColorPrimary || theme.palette.buttonText};

	&::before {
		content: '';
		position: absolute;
		left: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 16px;
		height: 16px;
		background-color: ${({ theme }) =>
			theme.palette.background || theme.palette.windowBg};
		border: 1px solid ${({ theme }) => theme.palette.buttonShadow};
	}

	@media (max-width: ${breakpointLandscape}px) {
		padding-left: 18px;

		&::before {
			width: 14px;
			height: 14px;
		}
	}
`;

export const FooterLink = styled.a`
	color: ${({ theme }) =>
		theme.title === 'light' ? '#4B7399' : theme.palette.primary};
	text-decoration: none;
	font-weight: bold;

	&:hover {
		text-decoration: underline;
	}
`;
