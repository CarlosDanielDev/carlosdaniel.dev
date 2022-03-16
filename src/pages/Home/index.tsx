import React from 'react';
import * as S from './styles';

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
	const disclaimer =
		'Olá, é um prazer em te encontrar por aqui, mas eu ainda estou construindo essa página, enquanto isso você pode navegar para a página de links pra me encontrar nas redes sociais, vlw flw ✌️...';
	return (
		<S.Wrapper>
			<S.Disclaimer title={disclaimer}>
				<S.Paragraph title={disclaimer}>{disclaimer}</S.Paragraph>
			</S.Disclaimer>
		</S.Wrapper>
	);
};
