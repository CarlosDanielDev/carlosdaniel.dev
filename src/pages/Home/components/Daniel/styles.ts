import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

export const Container = styled.div`
	max-width: 800px;
	margin: 0 auto;
	padding: 20px;
	p {
		color: ${({ theme }) => theme.palette.title};
	}

	@media (max-width: 576px) {
		padding: 10px;
	}
`;

export const Header = styled.header`
	background-color: ${({ theme }) => theme.palette.title};
	padding: 20px;
	text-align: center;
	margin-bottom: 20px;

	@media (max-width: 576px) {
		padding: 10px;
	}
`;

export const Title = styled.h1`
	font-size: 3em;
	margin: 0;
	color: ${({ theme }) => theme.palette.background};
	font-weight: normal;

	@media (max-width: 576px) {
		font-size: 2em;
		text-align: left;
		margin-bottom: 10px;
	}
`;

export const Subtitle = styled.h2`
	font-size: 2em;
	font-weight: normal;
	color: ${({ theme }) => theme.palette.title};
	margin-top: 30px;

	@media (max-width: 576px) {
		font-size: 1.5em;
		text-align: left;
		margin-bottom: 20px;
	}
`;

export const Paragraph = styled.p`
	line-height: 1.5;
	margin: 0 0 20px 0;

	@media (max-width: 576px) {
		font-size: 0.8em;
	}
`;

export const UnorderedList = styled.ul`
	list-style: none;
	margin: 0;
	padding: 0;

	@media (max-width: 576px) {
		margin-left: 20px;
	}
`;

export const ListItem = styled.li`
	display: inline-block;
	color: ${({ theme }) => theme.palette.title};
	margin-right: 10px;

	@media (max-width: 576px) {
		display: block;
		margin-right: 0;
		margin-bottom: 10px;
	}
`;

export const Anchor = styled(NavLink)<NavLinkProps>`
	color: ${({ theme }) => theme.palette.background};
	text-decoration: none;

	&:hover {
		color: ${({ theme }) => theme.palette.secondary};
		text-decoration: underline;
	}
`;

export const Footer = styled.footer`
	background-color: ${({ theme }) => theme.palette.title};
	color: ${({ theme }) => theme.palette.background};
	font-family: 'Roboto';
	padding: 20px;
	text-align: center;
	margin-top: 20px;

	@media (max-width: 576px) {
		padding: 10px;
	}
`;
