import styled from 'styled-components';

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
