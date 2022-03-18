import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100vh;
`;

export const BackButton = styled.button`
	color: ${({ theme }) => theme.typography.title};
	position: fixed;
	top: 8px;
	left: 8px;
`;

export const Title = styled.h1`
	font-family: 'Rubik';
	font-size: 10rem;
	color: ${({ theme }) => theme.typography.title};
`;
