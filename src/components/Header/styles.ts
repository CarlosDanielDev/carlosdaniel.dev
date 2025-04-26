import styled, { css } from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';
import { breakpointDesktop } from 'src/constants';

export const Container = styled.header`
	display: flex;
	justify-content: space-between;
	max-width: 1100px;
	width: 100%;
	align-self: center;
	height: 70px;
	padding: 12px 24px;
	margin: 0 auto;
	background: ${({ theme }) => theme.palette.background};
	border-radius: 0 0 16px 16px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	z-index: 10;
	transition: all 0.3s ease;

	${({ theme }) =>
		theme?.title === 'cyberpunk' &&
		css`
			background: ${theme?.palette.background};
			box-shadow: 0 4px 15px rgba(0, 221, 255, 0.2);
			border-bottom: 1px solid ${theme?.palette.accent2};
		`}

	@media (min-width: ${breakpointDesktop}px) {
		top: 0;
		left: calc(50% - 550px);
		position: fixed;
	}
`;

const Common = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
`;

export const Left = styled(Common)`
	justify-content: flex-start;
`;

export const Right = styled(Common)`
	justify-content: flex-end;
	position: relative;
	gap: 16px;
`;

export const Nav = styled.nav`
	display: flex;
	width: auto;
	list-style: none;
	gap: 12px;
`;

export const LinkNav = styled(NavLink as any)<NavLinkProps>`
	display: flex;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	height: 100%;

	color: ${({ theme }) => theme.palette.secondary};
	background: transparent;
	min-width: 48px;
	padding: 0 16px;
	height: 46px;
	font-weight: 500;

	border-radius: 8px;
	transition: all 0.2s ease;

	&.active {
		background: ${({ theme }) => theme.palette.primary};
		color: ${({ theme }) => theme.palette.textColorPrimary};
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
	}

	&:hover {
		transform: translateY(-2px);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
		background: ${({ theme }) => theme.palette.backgroundHover};
		color: ${({ theme }) => theme.palette.title};
	}

	${({ theme }) =>
		theme?.title === 'cyberpunk' &&
		css`
			&.active {
				background: ${theme?.palette.accent2};
				box-shadow: 0 0 10px ${theme?.palette.accent2};
			}

			&:hover {
				background: rgba(0, 221, 255, 0.2);
				box-shadow: 0 0 15px rgba(0, 221, 255, 0.3);
			}
		`}
`;
