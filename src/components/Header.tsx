/* eslint-disable import/no-cycle */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Logo, ToggleTheme, FlagSelect, BottomMenu } from 'src/components';
import { useHeader, useMobile } from 'src/contexts';
import { FaLaptopCode } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineEmojiObjects } from 'react-icons/md';
import * as S from 'src/components/header/styles';

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
										<FaLaptopCode size={24} />
									</S.LinkNav>
									<S.LinkNav
										to="/about"
										title={t('components.header.about', 'About')}
									>
										<MdOutlineEmojiObjects size={26} />
									</S.LinkNav>
									<S.LinkNav to="/links" title={t('components.header.links')}>
										<BiCodeAlt size={26} />
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
