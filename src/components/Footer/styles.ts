import { breakpointLandscape } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.footer`
	display: none;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.typography.backgroundHover};
	box-shadow: ${({ theme }) => theme.typography.shadow};

	@media (min-width: ${breakpointLandscape}px) {
		display: flex;

		height: 70px;
		bottom: 0;
	}
`;

export const InfoFooter = styled.span`
	color: ${({ theme }) => theme.typography.title};
	font-size: 16px;
	font-weight: bold;
`;
