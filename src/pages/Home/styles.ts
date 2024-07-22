import styled from 'styled-components';

export const Wrapper = styled.div`
	margin-top: 48px;
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	gap: 32px;
`;

export const Section = styled.section`
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.palette.title};
	font-size: 2.5rem;
	font-weight: bold;
`;

export const Paragraph = styled.p`
	color: ${({ theme }) => theme.palette.title};
	font-size: 1.8rem;
	text-align: justify;
`;

export const ExperienceList = styled.ul`
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;

export const ExperienceItem = styled.li`
	background: ${({ theme }) => theme.palette.background};
	padding: 16px;
	border-radius: 8px;
	box-shadow: ${({ theme }) => theme.palette.shadow};
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const ExperienceDate = styled.span`
	color: ${({ theme }) => theme.palette.title};
	font-size: 1.4rem;
`;

export const ExperienceName = styled.a`
	color: ${({ theme }) => theme.palette.primary};
	font-size: 1.6rem;
	font-weight: bold;
	text-decoration: none;

	&:hover {
		text-decoration: underline;
	}
`;

export const ProjectPreview = styled.div`
	margin-top: 8px;
	padding: 12px;
	border-left: 3px solid ${({ theme }) => theme.palette.primary};
	background: ${({ theme }) => theme.palette.backgroundHover};
	border-radius: 4px;
`;

export const ProjectLink = styled.a`
	color: ${({ theme }) => theme.palette.primary};
	font-weight: bold;
	text-decoration: none;
	font-size: 1.4rem;

	&:hover {
		text-decoration: underline;
	}
`;

export const Status = styled.span`
	display: block;
	margin-top: 4px;
	color: ${({ theme }) => theme.palette.secondary};
	font-size: 1.2rem;
	font-style: italic;
`;
