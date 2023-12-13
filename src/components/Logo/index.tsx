import React from 'react';
import * as S from './styles';
import imageLogo from './logo-cddev.png';

interface LogoProps {}

export const Logo: React.FC<LogoProps> = () => {
	return (
		<S.Box>
			<img width={90} height={100} src={imageLogo} />
		</S.Box>
	);
};
