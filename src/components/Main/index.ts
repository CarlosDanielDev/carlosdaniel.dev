import { breakpointDesktop } from 'src/constants';
import styled, { css } from 'styled-components';

export const Main = styled.main`
	min-height: 100%;
	width: 100%;
	flex: 1;
	position: relative;
	z-index: 1;
	overflow: hidden;
	background: transparent;

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background: ${({ theme }) => theme?.palette.background};
	}

	${({ theme }) =>
		theme?.title === 'win98' &&
		css`
			&::before {
				background: ${theme?.palette.background};
			}
		`}

	${({ theme }) =>
		theme?.title === 'cyberpunk' &&
		css`
			&::before {
				background: linear-gradient(
					180deg,
					${theme?.palette.background} 0%,
					${theme?.palette.backgroundHover} 100%
				);
				opacity: 0.99;
			}
		`}
	
	@media (min-width: ${breakpointDesktop}px) {
		padding-top: 80px;
	}
`;
