import React from 'react';
import * as S from './styles';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
	return (
		<S.Box>
			<S.Letter>@carlosdaniel.dev</S.Letter>
		</S.Box>
	);
};
