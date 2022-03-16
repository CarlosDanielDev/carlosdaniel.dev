import React from 'react';
import { Logo, ToggleTheme } from 'components';
import * as S from './styles';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
	return (
		<S.Container>
			<S.Left>
				<Logo />
			</S.Left>
			<S.Right>
				<S.Nav>
					<S.LinkNav to="/">Home</S.LinkNav>
					<S.LinkNav to="/links">Links</S.LinkNav>
				</S.Nav>
				<ToggleTheme />
			</S.Right>
		</S.Container>
	);
};
