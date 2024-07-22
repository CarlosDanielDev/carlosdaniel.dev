import { breakpointDesktop } from 'src/constants';
import styled from 'styled-components';

export const Main = styled.main`
	/* height: 100%; */
	width: 100%;
	@media (min-width: ${breakpointDesktop}px) {
		padding-top: 80px;
	}
`;
