import React from 'react';
import { Sun, Moon } from 'react-feather';
import { useTheme } from 'src/contexts';
import * as S from './styles';

interface ToggleThemeProps {}

export const ToggleTheme: React.FC<ToggleThemeProps> = () => {
	const { currentTheme, toggleTheme } = useTheme();

	return (
		<S.Container onClick={toggleTheme}>
			{currentTheme?.title === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
		</S.Container>
	);
};
