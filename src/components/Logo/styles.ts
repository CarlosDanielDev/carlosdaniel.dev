import styled from 'styled-components';

export const Container = styled.div``;

export const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Letter = styled.h1`
	font-size: 2.4rem;
	font-weight: 900;
	color: ${({ theme }) => theme.typography.title};
	display: block;
	padding: 8px;
	font-family: 'Pacifico';
	&:first-child {
		padding: 8px 0 8px 8px;
	}
	&:last-child {
		padding: 8px 8px 8px 0;
	}
	@media (max-width: 400px) {
		font-size: 1.6rem;
	}
`;
