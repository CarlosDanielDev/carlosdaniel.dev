import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
`;

export const Input = styled.input`
	border: 0;
	border-radius: 5px;
	background: ${({ theme }) => theme.palette.backgroundHover};
	height: 48px;
	width: 100%;
	padding: 8px;
	color: ${({ theme }) => theme.palette.title};
	font-size: 1.6rem;
`;

export const ErrorContainer = styled.div`
	margin-top: 8px;
`;

export const Span = styled.span`
	color: ${({ theme }) => theme.palette.error}!important;
	font-size: 1.5rem;
	letter-spacing: 0.1rem;
`;
