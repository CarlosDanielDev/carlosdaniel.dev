import React from 'react';
import { GoBackButton, TextNotFound } from 'src/components';
import * as S from 'src/pages/not-found/styles';

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
	return (
		<S.Container>
			<S.ContainerButtonGoBack>
				<GoBackButton />
			</S.ContainerButtonGoBack>
			<TextNotFound size="large">404</TextNotFound>
		</S.Container>
	);
}; 
