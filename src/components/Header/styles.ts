import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { breakpointDesktop } from 'src/constants';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	max-width: 900px;
	width: 100%;
	height: 60px;
	padding-top: 8px;
	background: ${({ theme }) => theme.palette.background};
	z-index: 10;
	transition: background 0.3s ease-in;
	@media (min-width: ${breakpointDesktop}px) {
		position: fixed;
	}
`;

const Common = styled.div`
	width: 50%;
	display: flex;
`;

export const Left = styled(Common)`
	justify-content: flex-start;
`;

export const Right = styled(Common)`
	justify-content: space-between;
	position: relative;
`;

export const Nav = styled.nav`
	display: flex;
	width: 100%;
	list-style: none;
`;

export const LinkNav = styled(NavLink)<NavLinkProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	height: 100%;

	color: ${({ theme }) => theme.palette.secondary};
	background: transparent;
	width: 88px;
	height: 100%;

	border-radius: 5px;
	transition: background 0.3s ease-in;

	&.active {
		background: ${({ theme }) => theme.palette.primary};
		color: ${({ theme }) => theme.palette.textColorPrimary};
		box-shadow: ${({ theme }) => theme.palette.shadow};
	}

	&:hover {
		box-shadow: ${({ theme }) => theme.palette.shadow};
		background: ${({ theme }) => theme.palette.backgroundHover};
		color: ${({ theme }) => theme.palette.title};
	}

	margin-right: 8px;
`;
