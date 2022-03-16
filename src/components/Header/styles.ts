import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	width: 100%;
	height: 56px;
	margin-top: 8px;
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

	color: ${({ theme }) => theme.typography.secondary};
	background: transparent;
	width: 88px;
	height: 100%;

	border-radius: 5px;
	transition: background 0.3s ease-in;

	&:hover {
		box-shadow: ${({ theme }) => theme.typography.shadow};
		background: ${({ theme }) => theme.typography.backgroundHover};
		color: ${({ theme }) => theme.typography.title};
	}

	&:first-child {
		margin-right: 8px;
	}
`;
