import React from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { cyberpunk } from './cyberpunk';
import { ThemeType } from './models';
import { ThemeFactory } from './themeFactory';

interface ThemeContextType {
	currentTheme: ThemeType;
	toggleTheme: () => void;
}

export const ThemeContext = React.createContext({} as ThemeContextType);

export const Theme: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const INITIAL_THEME = cyberpunk;
	const [currentTheme, setCurrentTheme] =
		React.useState<ThemeType>(INITIAL_THEME);

	const toggleTheme = React.useCallback(() => {
		setCurrentTheme(currentTheme => ThemeFactory.getNextTheme(currentTheme));
	}, []);

	const value = React.useMemo(
		() => ({ currentTheme, toggleTheme }),
		[currentTheme, toggleTheme],
	);
	return (
		<ThemeContext.Provider value={value}>
			<StyledComponentsProvider theme={currentTheme}>
				{children}
			</StyledComponentsProvider>
		</ThemeContext.Provider>
	);
};

export function useTheme() {
	const context = React.useContext(ThemeContext);

	if (!context) {
		throw new Error('ThemeProvider Error');
	}

	return context;
}
