import { breakpointLandscape } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.footer`
	display: none;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.palette.backgroundHover};
	box-shadow: ${({ theme }) => theme.palette.shadow};
	width: 100%;

	@media (min-width: ${breakpointLandscape}px) {
		display: flex;
		height: 70px;
	}
`;

export const InfoFooter = styled.span`
	color: ${({ theme }) => theme.palette.title};
	font-size: 16px;
	font-weight: bold;
`;
