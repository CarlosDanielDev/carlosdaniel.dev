import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
	position: fixed;
	z-index: 25;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.palette.background};
	box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
	border-radius: 16px 16px 0 0;
`;

export const List = styled.ul`
	width: 100%;
	display: flex;
	justify-content: space-evenly;
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const Item = styled(NavLink as any)`
	padding: 8px 0;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	text-decoration: none;
	color: ${({ theme }) => theme.palette.secondary};
	width: 100%;
	transition: all 0.2s ease;
	position: relative;

	svg {
		margin-bottom: 4px;
		transition: all 0.2s ease;
	}

	&.active {
		color: ${({ theme }) => theme.palette.primary};

		&::after {
			content: '';
			position: absolute;
			bottom: 0;
			left: 50%;
			transform: translateX(-50%);
			width: 40%;
			height: 3px;
			background: ${({ theme }) => theme.palette.primary};
			border-radius: 4px 4px 0 0;
		}

		svg {
			transform: translateY(-4px);
		}

		span {
			display: block;
			font-size: 0.9rem;
			font-weight: 500;
		}
	}

	&:hover {
		color: ${({ theme }) => theme.palette.title};
	}
`;

export const IconContainer = styled.div`
	padding: 0;
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	transition: all 0.2s ease;
	position: relative;
`;

export const Label = styled.span`
	display: none;
	font-size: 0.8rem;
	margin-top: 2px;
	width: auto;
	transition: all 0.3s ease;
`;
