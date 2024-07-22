import { breakpointLandscape } from 'src/constants';
import styled from 'styled-components';

export const CenteredContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 0 10px;

	@media (min-width: ${breakpointLandscape}px) {
		max-width: 900px;
		padding: 0;
	}
`;
