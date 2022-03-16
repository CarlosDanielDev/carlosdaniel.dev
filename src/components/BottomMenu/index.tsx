import React from 'react';
import { Home, Link as LinkIcon } from 'react-feather';
import { ToggleTheme } from '../ToggleTheme';
import * as S from './styles';

interface BottomMenuProps {}

export const BottomMenu: React.FC<BottomMenuProps> = () => {
	return (
		<S.Container>
			<S.List>
				<S.Item to="/" title="Home">
					<Home />
				</S.Item>
				<S.Item to="/links" title="links">
					<LinkIcon />
				</S.Item>
				<ToggleTheme />
			</S.List>
		</S.Container>
	);
};
