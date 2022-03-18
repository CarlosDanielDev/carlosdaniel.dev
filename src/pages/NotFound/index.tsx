import React from 'react';
import { ArrowLeft } from 'react-feather';
import { useNavigate } from 'react-router-dom';
import * as S from './styles';

interface NotFoundProps {}

export const NotFound: React.FC<NotFoundProps> = () => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<S.Container>
			<S.BackButton onClick={handleGoBack}>
				<ArrowLeft size={40} />
			</S.BackButton>
			<S.Title>404</S.Title>
		</S.Container>
	);
};
