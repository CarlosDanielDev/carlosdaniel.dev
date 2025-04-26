import { breakpointLandscape } from 'src/constants';
import styled, { css } from 'styled-components';

export const CenteredContainer = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 0 10px;
	position: relative;
	z-index: 1;
	background: transparent;

	${({ theme }) =>
		theme?.title === 'win98' &&
		css`
			background: transparent;
		`}

	${({ theme }) =>
		theme?.title === 'cyberpunk' &&
		css`
			background: transparent;
		`}

	@media (min-width: ${breakpointLandscape}px) {
		max-width: 900px;
		padding: 0;
	}
`;
