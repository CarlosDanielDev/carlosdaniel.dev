import { breakpointLandscape } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	height: 100%;
	@media (min-width: ${breakpointLandscape}px) {
		align-items: center;
	}
`;

export const BackButton = styled.button`
	color: ${({ theme }) => theme.palette.title};
	position: fixed;
	top: 88px;
	left: 8px;
	@media (min-width: ${breakpointLandscape}px) {
		position: absolute;
		top: 48px;
	}
`;
