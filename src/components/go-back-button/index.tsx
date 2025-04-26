import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'react-feather';
import * as S from './styles';

interface GoBackButtonProps {}

export const GoBackButton: React.FC<GoBackButtonProps> = () => {
	const navigate = useNavigate();

	const handleGoBack = React.useCallback(() => {
		navigate(-1);
	}, [navigate]);

	return (
		<S.Container onClick={handleGoBack}>
			<ArrowLeft size={40} />
		</S.Container>
	);
};
