import { breakpointLandscape } from 'src/constants';
import styled from 'styled-components';

type ItemProps = {
	done: boolean;
};

export const Container = styled.div`
	margin: 32px 8px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	flex-direction: column;
	height: 100%;
	overflow-y: auto;
`;

export const Title = styled.h2`
	color: ${({ theme }) => theme.palette.title};
`;

export const Form = styled.form`
	width: 100%;
	display: flex;
	justify-content: space-between;
	margin-top: 32px;
`;

export const Submit = styled.button`
	color: ${({ theme }) => theme.palette.textColorPrimary};
	background: ${({ theme }) => theme.palette.primary};
	height: 48px;
	border-radius: 5px;
	padding: 8px;
	font-size: 1.6rem;
	width: 42%;
	margin-left: 16px;
	box-shadow: ${({ theme }) => theme.palette.shadow};
`;

export const List = styled.ul`
	list-style: none;
	width: 100%;
	margin-top: 32px;
	overflow-y: scroll;
	margin-bottom: 20%;

	@media (min-width: ${breakpointLandscape}px) {
		margin-bottom: 5%;
	}
`;

export const Item = styled.button<ItemProps>`
	text-transform: capitalize;
	color: ${({ theme }) => theme.palette.title};
	border-radius: 5px;
	height: 50px;
	width: 100%;
	display: flex;
	align-items: center;
	padding: 0 8px;
	font-size: 1.6rem;
	background: ${({ done, theme }) =>
		done ? theme.palette.backgroundHover : 'transparent'};
	&:hover {
		background: ${({ theme }) => theme.palette.backgroundHover};
		box-shadow: ${({ theme }) => theme.palette.shadow};
	}

	text-decoration: ${({ done, theme }) =>
		done ? `line-through solid ${theme.palette.secondary}` : 'none'};
	margin-bottom: 8px;
	box-shadow: ${({ done, theme }) => (done ? theme.palette.shadow : 'none')};
`;

export const Label = styled.span`
	margin-left: 16px;
`;

export const EmptyContainer = styled.div`
	height: 20vh;
	display: flex;
	align-items: center;
`;
