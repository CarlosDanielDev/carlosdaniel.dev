import React from 'react';
import * as S from '../styles';

interface CommandOutputProps {
	output: string;
}

export const CommandOutputComponent: React.FC<CommandOutputProps> = ({
	output,
}) => {
	return <S.CommandOutput>{output}</S.CommandOutput>;
};
