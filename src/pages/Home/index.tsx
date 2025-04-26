import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { RetroTerminal, Y2KEffects } from './components';
import * as S from './styles';

interface Project {
	name: string;
	description: string;
	status: string;
	link?: string;
}

interface Experience {
	name: string;
	period: string;
	role: string;
	projects: Project[];
	hyperlink?: string;
}

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const { t } = useTranslation();

	const experiences = t('home.experiences', {
		returnObjects: true,
	}) as Experience[];

	return (
		<S.Wrapper>
			<RetroTerminal />
			<Y2KEffects />
			<S.Section>
				<S.Title>{t('home.whoIs')}</S.Title>
				<S.Paragraph>{t('home.description')}</S.Paragraph>
				<S.TerminalLink>
					<Link to="/terminal">
						{t('home.tryTerminal', 'Try the interactive terminal interface')}
					</Link>
				</S.TerminalLink>
			</S.Section>

			<S.Section>
				<S.Paragraph>
					{t('home.experience1')} {t('home.experience2')}{' '}
					{t('home.experience3')} {t('home.experience4')}
				</S.Paragraph>
			</S.Section>

			<S.Section>
				<S.Title>{t('home.experience')}</S.Title>
				<S.ExperienceList>
					{experiences.map((experience, index) => (
						<S.ExperienceItem key={`${index + 1}-xp`}>
							<S.ExperienceDate>{experience.period}</S.ExperienceDate>
							<S.ExperienceName
								href={experience.hyperlink || '#'}
								target="_blank"
								rel="noopener noreferrer"
							>
								{experience.name}
							</S.ExperienceName>
							<S.Paragraph>{experience.role}</S.Paragraph>
							{experience.projects.map((project, index) => (
								<S.ProjectPreview key={`${index + 1}-item`}>
									<S.ProjectLink
										href={project.link || '#'}
										target="_blank"
										rel="noopener noreferrer"
									>
										{project.name}
									</S.ProjectLink>
									<S.Paragraph>{project.description}</S.Paragraph>
									<S.Status>{project.status}</S.Status>
								</S.ProjectPreview>
							))}
						</S.ExperienceItem>
					))}
				</S.ExperienceList>
			</S.Section>

			<S.Section>
				<S.Paragraph>
					{t('home.thanksForVisiting')} {t('home.contact')} {t('home.moreInfo')}
				</S.Paragraph>
			</S.Section>
		</S.Wrapper>
	);
};
