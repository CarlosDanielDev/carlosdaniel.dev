import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease-out;
	height: 100%;
`;

export const Picture = styled.img`
	width: 124px;
	height: 124px;
	transition: all 0.3s ease-out;
	border-radius: 62px;
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
	color: ${({ theme }) => theme.palette.title};
`;

export const Caption = styled.h2`
	font-size: 1.4rem;
	color: ${({ theme }) => theme.palette.secondary};
	margin-top: 12px;
`;

export const ListLinks = styled.ul`
	list-style: none;
	margin-bottom: 80px;
`;

export const ListItemLink = styled.li`
	height: 40px;
	min-width: 300px;
	display: flex;
	justify-content: center;
	padding: 5px;
	border-radius: 5px;
	margin-bottom: 16px;
	cursor: pointer;
	background: ${({ theme }) => theme.palette.backgroundHover};
	transition: background 0.3s ease-out;
	box-shadow: ${({ theme }) => theme.palette.shadow};

	&:last-child {
		a {
			svg {
				fill: ${({ theme }) => theme.palette.title};
			}
		}
	}

	&:hover {
		border: 2px solid ${({ theme }) => theme.palette.primary};
	}
`;

export const Link = styled.a`
	text-decoration: none;
	color: transparent;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	svg {
		stroke: ${({ theme }) => theme.palette.title};

		transition: stroke 0.3s ease-out;
	}
`;

export const Label = styled.span`
	text-align: justify;
`;
