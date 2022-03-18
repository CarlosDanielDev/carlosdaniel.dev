import styled from 'styled-components';

export const CenteredContainer = styled.div`
	max-width: 900px;
	width: 100%;
	overflow: hidden;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	padding: 0 10px;

	@media (max-width: 800px) {
		padding: 0;
	}
`;
