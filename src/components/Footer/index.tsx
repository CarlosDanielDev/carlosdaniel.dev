import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
	const { t } = useTranslation();

	const currentYear = new Date().getFullYear();

	return (
		<S.Container>
			<S.InfoFooter>
				<S.FooterText>{t('components.footer.infoFooter')}</S.FooterText>
				<S.FooterText>
					© {currentYear} -{' '}
					<S.FooterLink
						href="https://github.com/CarlosDanielDev"
						target="_blank"
						rel="noopener noreferrer"
					>
						Carlos Daniel
					</S.FooterLink>
				</S.FooterText>
			</S.InfoFooter>
		</S.Container>
	);
};
