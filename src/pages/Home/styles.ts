import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Disclaimer = styled.div`
	width: 95%;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.palette.backgroundHover};
	border-radius: 15px;
	padding: 20px;
	box-shadow: ${({ theme }) => theme.palette.shadow};
`;

export const Paragraph = styled.p`
	color: ${({ theme }) => theme.palette.title};

	font-size: 2rem;
	font-weight: bold;
	text-align: justify;
`;
