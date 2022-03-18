import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 80vh;

	color: ${({ theme }) => theme.typography.title};
`;

export const TimeContainer = styled.div`
	display: flex;
	margin-top: 16px;
`;

export const Span = styled.span`
	color: ${({ theme }) => theme.typography.title};
	font-size: 2.6rem;
`;

export const Caption = styled.span`
	color: ${({ theme }) => theme.typography.title};
	font-size: 1.8rem;
	margin-top: 8px;
`;
