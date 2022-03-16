import React from 'react';
import { Home, Link as LinkIcon } from 'react-feather';
import { Logo, ToggleTheme } from 'components';
import { useMobile } from 'src/contexts';
import * as S from './styles';
import { BottomMenu } from '../BottomMenu';

interface HeaderProps {}

export const Header: React.FC<HeaderProps> = () => {
	const { isMobile } = useMobile();
	return (
		<>
			<S.Container>
				<S.Left>
					<Logo />
				</S.Left>
				<S.Right>
					{!isMobile && (
						<>
							<S.Nav>
								<S.LinkNav to="/">
									<Home size={24} />
								</S.LinkNav>
								<S.LinkNav to="/links">
									<LinkIcon size={24} />
								</S.LinkNav>
							</S.Nav>
							<ToggleTheme />
						</>
					)}
				</S.Right>
			</S.Container>
			{isMobile && <BottomMenu />}
		</>
	);
};
