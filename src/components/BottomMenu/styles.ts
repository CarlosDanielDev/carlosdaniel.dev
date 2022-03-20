import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.palette.background};
`;

export const List = styled.ul`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	border-top: 1px solid ${({ theme }) => theme.palette.secondary};
`;

export const Item = styled(NavLink)`
	padding: 12px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	color: ${({ theme }) => theme.palette.title};
	width: 100%;

	&.active {
		background: ${({ theme }) => theme.palette.primary};
		color: ${({ theme }) => theme.palette.textColorPrimary};

		span {
			display: block;
			margin-left: 8px;
		}
	}
`;

export const Label = styled.span`
	display: none;
	width: auto;
	transition: display 0.3s ease-out;
`;
