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
		background: ${({ theme }) => theme.typography.backgroundHover};
		box-shadow: ${({ theme }) => theme.typography.shadow};
	}

	svg {
		stroke: ${({ theme }) => theme.typography.secondary};
	}
`;
