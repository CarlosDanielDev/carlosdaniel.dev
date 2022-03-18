import styled from 'styled-components';

export const Container = styled.main`
	margin: 0 8px;
`;

export const Title = styled.h1`
	font-size: 2rem;
	color: ${({ theme }) => theme.typography.title};
	margin-bottom: 16px;

	@media (min-width: 700px) {
		font-size: 2.6rem;
	}
`;

export const List = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-wrap: wrap;
	overflow-y: auto;
	margin-bottom: 60px;
`;

export const Item = styled.div`
	width: 170px;
	height: 170px;
	cursor: pointer;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;

	color: ${({ theme }) => theme.typography.title};
	box-shadow: ${({ theme }) => theme.typography.shadow};
	background: ${({ theme }) => theme.typography.backgroundHover};
	border-radius: 5px;
	margin-right: 8px;
	margin-bottom: 8px;
	position: relative;

	&:hover {
		border: 2px solid ${({ theme }) => theme.typography.primary};
		.title-tool-item {
			display: flex;
		}
	}

	@media (min-width: 700px) {
		width: 140px;
		height: 140px;
	}
`;

export const CaptionContainer = styled.div`
	position: absolute;
	bottom: 0;
	padding: 8px;
	width: 100%;
	display: none;
	align-items: center;
	justify-content: center;

	box-shadow: ${({ theme }) => theme.typography.shadow};
	background: ${({ theme }) => theme.typography.background};
	border-radius: 5px;
`;

export const Caption = styled.span`
	font-weight: bold;
`;
