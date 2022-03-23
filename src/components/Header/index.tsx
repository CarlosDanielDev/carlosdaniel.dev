import React from 'react';
import { Home, Link as LinkIcon, Tool as ToolIcon } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { Logo, ToggleTheme, FlagSelect, BottomMenu } from 'components';
import { useHeader, useMobile } from 'src/contexts';
import * as S from './styles';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
	const { isMobile } = useMobile();
	const { mobileVisible, enabled } = useHeader();
	const { t } = useTranslation();
	return (
		<>
			{enabled && (
				<S.Container>
					<S.Left>
						<Logo />
					</S.Left>
					<S.Right>
						{!isMobile && (
							<>
								<S.Nav>
									<S.LinkNav to="/" title={t('components.header.home')}>
										<Home size={24} />
									</S.LinkNav>
									<S.LinkNav to="/links" title={t('components.header.links')}>
										<LinkIcon size={24} />
									</S.LinkNav>
									<S.LinkNav to="/tools" title={t('components.header.tools')}>
										<ToolIcon size={24} />
									</S.LinkNav>
								</S.Nav>
								<ToggleTheme />
							</>
						)}
						<FlagSelect />
					</S.Right>
				</S.Container>
			)}
			{isMobile && mobileVisible && <BottomMenu />}
		</>
	);
};
