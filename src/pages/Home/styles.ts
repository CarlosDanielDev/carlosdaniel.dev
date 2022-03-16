import styled from 'styled-components';

export const Wrapper = styled.div`
	height: 100%;
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
	background: ${({ theme }) => theme.typography.backgroundHover};
	border-radius: 15px;
	padding: 20px;
`;

export const Paragraph = styled.p`
	color: ${({ theme }) => theme.typography.title};

	font-size: 2rem;
	font-weight: bold;
	text-align: justify;
`;
