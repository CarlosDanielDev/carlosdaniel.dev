import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
	const { t } = useTranslation();
	return (
		<S.Container>
			<S.InfoFooter>{t('components.footer.infoFooter')}</S.InfoFooter>
		</S.Container>
	);
};
