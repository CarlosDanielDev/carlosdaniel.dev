import React from 'react';
import {
	Instagram,
	Linkedin as In,
	Facebook,
	Mail,
	GitHub,
} from 'react-feather';
import { FaWhatsapp } from 'react-icons/fa';
import * as S from './styles';

interface LinksProps {}

enum LinksMedia {
	INSTAGRAM = 'https://www.instagram.com/carlosdaniel.dev/',
	PICTURE = 'https://i.imgur.com/4edHzS1.png',
	LINKEDIN = 'https://www.linkedin.com/in/carlos-daniel-70733b190/',
	FACEBOOK = 'https://www.facebook.com/profile.php?id=100008778948740',
	GMAIL = 'mailto:contato@carlosdaniel.dev',
	GITHUB = 'https://github.com/CarlosDanielDev',
	WHATSAPP = 'https://wa.me/5594991041763',
}

export const Links: React.FC<LinksProps> = () => (
	<S.Wrapper>
		<S.PersonalInfoContainer>
			<S.Picture src={LinksMedia.PICTURE} />
			<S.Title title="Carlos Daniel Dev" href={LinksMedia.INSTAGRAM}>
				@carlosdaniel.dev
			</S.Title>
			<S.Caption title="Desenvolvedor de software">
				Software developer
			</S.Caption>
		</S.PersonalInfoContainer>
		<S.ListLinks>
			<S.ListItemLink title="github">
				<S.Link href={LinksMedia.GITHUB} target="_blank">
					<GitHub />
				</S.Link>
			</S.ListItemLink>
			<S.ListItemLink title="instagram">
				<S.Link href={LinksMedia.INSTAGRAM} target="_blank">
					<Instagram />
				</S.Link>
			</S.ListItemLink>
			<S.ListItemLink title="linkedin">
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
			<S.ListItemLink title="whatsapp">
				<S.Link href={LinksMedia.WHATSAPP}>
					<FaWhatsapp size={24} />
				</S.Link>
			</S.ListItemLink>
		</S.ListLinks>
	</S.Wrapper>
);
