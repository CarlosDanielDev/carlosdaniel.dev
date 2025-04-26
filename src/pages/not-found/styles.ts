import { breakpointLandscape } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	height: 100%;
	width: 100%;
	@media (min-width: ${breakpointLandscape}px) {
		align-items: center;
	}
`;

export const ContainerButtonGoBack = styled.div`
	position: fixed;
	top: 16px;
	left: 16px;

	@media (min-width: ${breakpointLandscape}px) {
		max-width: 900px;
		left: 10%;
		right: 10%;
	}
`;
