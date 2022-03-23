import React from 'react';
import * as S from './styles';

export type ErrorInputProps = {
	error: boolean;
	label: string;
};

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	error: ErrorInputProps;
}

export const Input: React.FC<InputProps> = ({ error, ...rest }) => {
	return (
		<S.Container>
			<S.Input {...rest} />
			{error.error && (
				<S.ErrorContainer>
					<S.Span>{error.label}</S.Span>
				</S.ErrorContainer>
			)}
		</S.Container>
	);
};
