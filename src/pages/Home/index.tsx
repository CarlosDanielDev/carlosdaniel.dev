import React from 'react';
import { CenteredContainer } from 'components';
import * as S from './styles';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => (
	<CenteredContainer>
		<S.Wrapper>Oi</S.Wrapper>
	</CenteredContainer>
);
