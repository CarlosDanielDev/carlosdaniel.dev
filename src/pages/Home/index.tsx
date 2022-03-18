import React from 'react';
import { useTranslation } from 'react-i18next';
import * as S from './styles';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const { t } = useTranslation();
	return (
		<S.Wrapper>
			<S.Disclaimer title={t('home.disclaimer')}>
				<S.Paragraph title={t('home.disclaimer')}>
					{t('home.disclaimer')}
				</S.Paragraph>
			</S.Disclaimer>
		</S.Wrapper>
	);
};
