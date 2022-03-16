import React from 'react';
import { CenteredContainer } from 'components';
import { Link } from 'react-router-dom';
import * as S from './styles';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	return (
		<CenteredContainer>
			<S.Wrapper>
				<Link to="/links">Links</Link>
			</S.Wrapper>
		</CenteredContainer>
	);
};
