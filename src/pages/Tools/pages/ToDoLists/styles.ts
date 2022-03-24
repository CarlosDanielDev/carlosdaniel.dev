import { Link } from 'react-router-dom';
import { breakpointLandscape } from 'src/constants';
import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	height: 100%;
	color: ${({ theme }) => theme.palette.title};
	margin: 0 8px;
	margin-top: 32px;
	position: relative;
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
	box-shadow: ${({ theme }) => theme.palette.shadow};

	&[disabled] {
		opacity: 0.5;
		cursor: not-allowed;
	}
`;

export const Title = styled.h2`
	width: 60%;
	letter-spacing: 102%;
	text-align: center;
`;

export const List = styled.ul`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-direction: column;
	margin: 32px 0;

	@media (min-width: ${breakpointLandscape}px) {
		display: inline-flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 12px;
		justify-content: flex-start;
		overflow-y: scroll;
	}
`;

export const Item = styled(Link)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;

	width: 100%;
	height: 40px;
	margin-bottom: 8px;

	color: ${({ theme }) => theme.palette.title};
	font-size: 1.6rem;
	border-radius: 5px;
	background: ${({ theme }) => theme.palette.backgroundHover};
	box-shadow: ${({ theme }) => theme.palette.shadow};

	&:hover {
		border: 2px solid ${({ theme }) => theme.palette.primary};
	}

	@media (min-width: ${breakpointLandscape}px) {
		width: 286px;
		height: 348px;
		margin: 0;
	}
`;

export const EmptyStateContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: center;
`;

export const ActionsContainer = styled.div`
	position: absolute;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 8px;
	border: 5px;
	background: ${({ theme }) => theme.palette.background};
`;
