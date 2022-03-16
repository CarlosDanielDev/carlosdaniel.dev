import React from 'react';
import * as S from './styles';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
	return (
		<S.Box>
			<S.Letter>Carlos </S.Letter>
			<S.Letter>Daniel </S.Letter>
			<S.Letter>{`<dev/>`}</S.Letter>
		</S.Box>
	);
};
