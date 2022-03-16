import React from 'react';
import * as S from './styles';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
	return (
		<S.Container>
			<S.InfoFooter>made with ♥️&nbsp; by @carlosdaniel.dev</S.InfoFooter>
		</S.Container>
	);
};
