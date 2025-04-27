import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { RetroTerminal, Y2KEffects } from 'src/pages/home/components';
import * as S from 'src/pages/home/styles';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const { t } = useTranslation();

	return (
		<S.Wrapper>
			<RetroTerminal />
			<Y2KEffects />
			<S.TerminalLink>
				<Link to="/about">{t('home.viewDetails', 'View details')}</Link>

				<Link to="/terminal">{t('home.tryTerminal', 'Try terminal')}</Link>
			</S.TerminalLink>
		</S.Wrapper>
	);
}; 
