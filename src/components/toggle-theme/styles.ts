import styled, { css } from 'styled-components';

export const ThemeContainer = styled.div`
	position: relative;
	display: inline-block;
`;

export const Container = styled.button`
	background: transparent;
	border: none;
	padding: 5px;
	border-radius: 50%;
	height: 40px;
	width: 40px;
	margin: 5px;
	display: flex;
	align-items: center;
	justify-content: center;

	&:hover {
		background: ${({ theme }) => theme.palette.backgroundHover};
	}

	svg {
		stroke: ${({ theme }) => theme.palette.secondary};
	}

	@media (max-width: 700px) {
		width: 100%;

		&:hover {
			background: transparent;
		}
	}
`;

export const Dropdown = styled.div`
	position: absolute;
	right: 0;
	bottom: 0%;
	min-width: 160px;
	background: ${({ theme }) => theme.palette.background};
	border-radius: 8px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
	z-index: 10;
	overflow: hidden;

	@media (min-width: 769px) {
		bottom: revert-layer;
	}
`;

interface ThemeOptionProps {
	active: boolean;
}

export const ThemeOption = styled.div<ThemeOptionProps>`
	padding: 10px 15px;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background: ${({ theme }) => theme.palette.backgroundHover};
	}

	${({ active, theme }) =>
		active &&
		css`
			background: ${theme.palette.primary};
			color: ${theme.palette.textColorPrimary};
		`}
`;
