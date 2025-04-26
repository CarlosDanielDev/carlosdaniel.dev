import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transition: all 0.3s ease-out;
	min-height: 80vh;
	padding: 20px 0;
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
	font-size: 1.6rem;
	font-weight: 100;
	color: ${({ theme }) => theme.palette.secondary};
	margin-top: 12px;
`;

export const ListLinks = styled.ul`
	list-style: none;
	margin-bottom: 40px;
	width: 100%;
	max-width: 300px;
`;

export const ListItemLink = styled.li`
	height: 40px;
	width: 100%;
	display: flex;
	justify-content: center;
	padding: 5px;
	border-radius: 5px;
	margin-bottom: 16px;
	cursor: pointer;
	background: ${({ theme }) => theme.palette.backgroundHover};
	transition: all 0.3s ease-out;
	box-shadow: ${({ theme }) => theme.palette.shadow};
	position: relative;
	overflow: hidden;

	${({ theme }) =>
		theme.title === 'cyberpunk' &&
		`
		border: 1px solid ${theme.palette.accent2};
		box-shadow: 0 0 5px ${theme.palette.accent2};
		
		&:hover {
			box-shadow: 0 0 10px ${theme.palette.accent2}, 0 0 20px ${theme.palette.accent2};
		}
	`}

	&:hover {
		border: ${({ theme }) =>
			theme.title !== 'cyberpunk'
				? `2px solid ${theme.palette.primary}`
				: 'initial'};
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
	z-index: 2;

	svg {
		stroke: ${({ theme }) => theme.palette.title};
		transition: all 0.3s ease-out;

		${({ theme }) =>
			theme.title === 'cyberpunk' &&
			`
			stroke: ${theme.palette.accent2};
			filter: drop-shadow(0 0 2px ${theme.palette.accent2});
			
			&:hover {
				filter: drop-shadow(0 0 5px ${theme.palette.accent2});
			}
		`}
	}
`;

export const Label = styled.span`
	text-align: justify;
`;
