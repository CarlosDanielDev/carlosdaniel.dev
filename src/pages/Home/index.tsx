import React from 'react';
import { CenteredContainer, Header } from 'components';
import * as S from './styles';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<CenteredContainer>
			<S.Wrapper>
				<Header />
			</S.Wrapper>
		</CenteredContainer>
	);
};
