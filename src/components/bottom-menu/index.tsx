/* eslint-disable import/no-cycle */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ToggleTheme } from 'src/components';
import { FaLaptopCode } from 'react-icons/fa';
import { BiCodeAlt } from 'react-icons/bi';
import { MdOutlineEmojiObjects } from 'react-icons/md';
import * as S from './styles';

interface BottomMenuProps {}

export const BottomMenu: React.FC<BottomMenuProps> = () => {
	const { t } = useTranslation();
	return (
		<S.Container>
			<S.List>
				<S.Item to="/" title={t('components.header.home')}>
					<FaLaptopCode size={22} />
				</S.Item>
				<S.Item to="/about" title={t('components.header.about', 'About')}>
					<MdOutlineEmojiObjects size={22} />
				</S.Item>
				<S.Item to="/links" title={t('components.header.links')}>
					<BiCodeAlt size={24} />
				</S.Item>
				<S.IconContainer>
					<ToggleTheme />
				</S.IconContainer>
			</S.List>
		</S.Container>
	);
};
