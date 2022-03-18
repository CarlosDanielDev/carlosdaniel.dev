import React from 'react';
import { Home, Link as LinkIcon, Tool as ToolIcon } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { ToggleTheme } from 'components';
import * as S from './styles';

interface BottomMenuProps {}

export const BottomMenu: React.FC<BottomMenuProps> = () => {
	const { t } = useTranslation();
	return (
		<S.Container>
			<S.List>
				<S.Item to="/" title={t('components.header.home')}>
					<Home />
				</S.Item>
				<S.Item to="/links" title={t('components.header.links')}>
					<LinkIcon />
				</S.Item>
				<S.Item to="/tools" title={t('components.header.tools')}>
					<ToolIcon />
				</S.Item>
				<ToggleTheme />
			</S.List>
		</S.Container>
	);
};
