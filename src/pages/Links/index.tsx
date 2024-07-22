import React from 'react';
import { Instagram, Linkedin as In, Facebook, Mail, GitHub } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import { githubApi } from 'src/services';
import * as S from './styles';

interface LinksProps {}

interface GitHubResponse {
	login: string;
	id: number;
	avatar_url: string;
	html_url: string;
	name: string;
}

enum LinksMedia {
	INSTAGRAM = 'https://www.instagram.com/carlosdaniel.dev/',
	LINKEDIN = 'https://www.linkedin.com/in/carlos-daniel-70733b190/',
	FACEBOOK = 'https://www.facebook.com/profile.php?id=100008778948740',
	GMAIL = 'mailto:contato@carlosdaniel.dev',
	GITHUB = 'https://github.com/CarlosDanielDev',
	WHATSAPP = 'https://wa.me/5511917031763',
}

export const Links: React.FC<LinksProps> = () => {
	const { t } = useTranslation();
	const { data: githubInfo } = useQuery<GitHubResponse>('@get-user-info', async () => {
		const response = await githubApi.get('/users/CarlosDanielDev');
		console.log({ response });
		return response.data;
	});

	return (
		<S.Wrapper>
			<S.PersonalInfoContainer>
				<figure>
					<S.Picture src={githubInfo?.avatar_url} />
				</figure>
				<S.Title title={githubInfo?.name} href={LinksMedia.INSTAGRAM}>
					@carlosdaniel.dev
				</S.Title>
				<S.Caption title={t('links.jobTitle')}>{t('links.jobTitle')}</S.Caption>
			</S.PersonalInfoContainer>
			<S.ListLinks>
				<S.ListItemLink title="github">
					<S.Link href={githubInfo?.html_url} target="_blank">
						<GitHub />
					</S.Link>
				</S.ListItemLink>
				<S.ListItemLink title="instagram">
					<S.Link href={LinksMedia.INSTAGRAM} target="_blank">
						<Instagram />
					</S.Link>
				</S.ListItemLink>
				<S.ListItemLink title="linkedIn">
					<S.Link href={LinksMedia.LINKEDIN} target="_blank">
						<In />
					</S.Link>
				</S.ListItemLink>
				<S.ListItemLink title="facebook">
					<S.Link href={LinksMedia.FACEBOOK} target="_blank">
						<Facebook />
					</S.Link>
				</S.ListItemLink>
				<S.ListItemLink title="email">
					<S.Link href={LinksMedia.GMAIL} target="_blank">
						<Mail />
					</S.Link>
				</S.ListItemLink>
			</S.ListLinks>
		</S.Wrapper>
	);
};
