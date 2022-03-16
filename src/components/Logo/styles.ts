import styled from 'styled-components';

export const Container = styled.div``;

export const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Letter = styled.h1`
	font-size: 1.6rem;
	font-weight: 900;
	background-color: ${({ theme }) => theme.typography.background};
	color: ${({ theme }) => theme.typography.title};
	display: block;
	padding: 8px;
	font-family: 'Pacifico', cursive;
	&:first-child {
		padding: 8px 0 8px 8px;
	}
	&:last-child {
		padding: 8px 8px 8px 0;
	}
`;
