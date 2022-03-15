import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Picture = styled.img`
	width: 124px;
	height: 124px;
`;

export const PersonalInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin: 40px 0;
`;

export const Title = styled.a`
	font-weight: bold;
	font-size: 2.4rem;
	margin-top: 12px;
	text-decoration: none;
	cursor: pointer;
	user-select: none;
	color: ${({ theme }) => theme.colors.black};
`;

export const Caption = styled.h2`
	font-size: 1.4rem;
	margin-top: 12px;
`;

export const ListLinks = styled.ul`
	list-style: none;
`;

export const ListItemLink = styled.li`
	height: 40px;
	min-width: 300px;
	display: flex;
	justify-content: center;
	padding: 5px;
	border: 1px solid ${({ theme }) => theme.colors.black};
	border-radius: 5px;
	margin-bottom: 16px;
	cursor: pointer;
	background: ${({ theme }) => theme.colors.white};
	transition: background 0.3s ease-out;

	&:hover {
		background: ${({ theme }) => theme.colors.black};
		a {
			svg {
				stroke: ${({ theme }) => theme.colors.white};
			}
		}
	}
`;

export const Link = styled.a`
	text-decoration: none;
	color: transparent;

	svg {
		stroke: ${({ theme }) => theme.colors.black};
		transition: stroke 0.3s ease-out;
	}
`;

export const Label = styled.span`
	text-align: justify;
`;
