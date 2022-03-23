import { Link } from 'react-router-dom';
import { breakpointLandscape } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	height: 100%;
	color: ${({ theme }) => theme.palette.title};
	margin: 0 8px;
	margin-top: 32px;
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
	margin-top: 32px;
`;

export const Input = styled.input``;

export const Submit = styled.input.attrs({
	type: 'submit',
})`
	border: 0;
	border-radius: 5px;
	background: ${({ theme }) => theme.palette.primary};
	color: ${({ theme }) => theme.palette.textColorPrimary};
	cursor: pointer;

	height: 48px;
	padding: 8px;
	font-size: 1.6rem;
	margin-top: 16px;

	&[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export const Title = styled.h2`
	width: 50%;
	letter-spacing: 102%;
`;

export const List = styled.ul`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 32px 0;

	@media (min-width: ${breakpointLandscape}px) {
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		overflow-y: scroll;
	}
`;

export const Item = styled(Link)`
	text-decoration: none;
	width: 100%;
	height: 40px;
	margin-bottom: 8px;
	color: ${({ theme }) => theme.palette.title};
	font-size: 1.6rem;
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.palette.backgroundHover};
	box-shadow: ${({ theme }) => theme.palette.shadow};

	&:hover {
		border: 2px solid ${({ theme }) => theme.palette.primary};
	}

	@media (min-width: ${breakpointLandscape}px) {
		width: 272px;
		height: 348px;
		margin-right: 16px;
		margin-bottom: 16px;
	}
`;

export const EmptyStateContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: center;
`;
