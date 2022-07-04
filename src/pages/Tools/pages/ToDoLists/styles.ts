import { Link } from 'react-router-dom';
import { breakpointLandscape } from 'src/constants';
import { shake } from 'src/styles/animations';
import styled from 'styled-components';

type ListProps = {
	size: number;
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: flex-start;
	/* height: 100%; */
	color: ${({ theme }) => theme.palette.title};
	margin: 0 8px;
	margin-top: 32px;
	position: relative;
	/* @media (min-width: ${breakpointLandscape}px) {

	} */
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

export const List = styled.div<ListProps>`
	width: 100%;
	display: flex;
	/* height: 300px; */
	flex-wrap: wrap;
	margin: 16px 0;
	overflow: auto;
	padding-bottom: 100px;

	@media (min-width: ${breakpointLandscape}px) {
		margin: 32px 0;
		display: inline-flex;
		height: ${window.innerHeight}px;
		gap: 12px;
		justify-content: flex-start;
		padding-bottom: 380px;
	}
`;

export const LinkItem = styled(Link)`
	text-decoration: none;
	color: ${({ theme }) => theme.palette.title};
	min-width: 30%;
	text-align: center;
	padding: 4px;
	background: ${({ theme }) => theme.palette.background};
	border-radius: 4px;
	margin: 4px;

	&:hover {
		border: 2px solid ${({ theme }) => theme.palette.primary};
	}
`;

export const Item = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;

	z-index: 15;

	width: 100%;
	height: 40px;
	margin-bottom: 8px;

	font-size: 1.6rem;
	border-radius: 5px;
	background: ${({ theme }) => theme.palette.backgroundHover};
	box-shadow: ${({ theme }) => theme.palette.shadow};

	@media (min-width: ${breakpointLandscape}px) {
		width: 286px;
		height: 348px;
		margin: 0;
		&:hover {
			button {
				top: 10px;
			}
			div {
				top: 10px;
			}
		}
	}
`;

export const DateContainer = styled.div`
	position: absolute;
	left: 10px;
	height: 100%;
	width: auto;
	z-index: 20;

	display: flex;
	justify-content: center;
	align-items: center;

	@media (min-width: ${breakpointLandscape}px) {
		height: auto;
		top: 12px;
	}
`;

export const DateInfo = styled.span`
	color: ${({ theme }) => theme.palette.title};
	font-style: oblique;
	font-size: 0.8rem;
	line-height: 0.8rem;
	opacity: 0.5;
	text-transform: capitalize;
`;

export const TrashContainer = styled.button`
	position: absolute;
	right: 10px;
	color: ${({ theme }) => theme.palette.title};
	height: 100%;
	z-index: 20;
	width: 40px;

	display: flex;
	justify-content: center;
	align-items: center;

	&:hover {
		animation-name: ${shake};
		animation-duration: 0.8s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
		transform-origin: 50% 100%;
	}

	@media (min-width: ${breakpointLandscape}px) {
		height: auto;
		top: 12px;
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
