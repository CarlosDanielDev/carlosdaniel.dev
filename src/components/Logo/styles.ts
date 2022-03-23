import styled from 'styled-components';

export const Container = styled.div``;

export const Box = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Letter = styled.h2`
	font-weight: 400;
	color: ${({ theme }) => theme.palette.title};
	display: block;
	padding: 8px;
	font-family: 'Pacifico';
	&:first-child {
		padding: 8px 0 8px 8px;
	}
	&:last-child {
		padding: 8px 8px 8px 0;
	}
`;
