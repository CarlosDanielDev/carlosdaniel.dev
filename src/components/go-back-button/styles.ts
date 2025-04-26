import styled from 'styled-components';

export const Container = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	top: 0;
	left: 0;
	color: ${({ theme }) => theme.palette.title};
	cursor: pointer;
`;
