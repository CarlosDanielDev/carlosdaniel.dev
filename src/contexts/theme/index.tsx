import React from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { dark } from './dark';
import { light } from './light';

type ThemeOption = typeof light;

interface Context {
	currentTheme: ThemeOption;
	toggleTheme: () => void;
}

export const ThemeContext = React.createContext({} as Context);

export const Theme: React.FC = ({ children }) => {
	const INITIAL_THEME = dark;
	const [currentTheme, setCurrentTheme] =
		React.useState<ThemeOption>(INITIAL_THEME);

	const toggleTheme = React.useCallback(() => {
		setCurrentTheme(state => (state?.title === 'dark' ? light : dark));
	}, []);

	const value = React.useMemo(
		() => ({ currentTheme, toggleTheme }),
		[currentTheme, toggleTheme],
	);
	return (
		<ThemeContext.Provider value={value}>
			<ThemeContext.Consumer>
				{context => (
					<StyledComponentsProvider theme={context.currentTheme}>
						{children}
					</StyledComponentsProvider>
				)}
			</ThemeContext.Consumer>
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
