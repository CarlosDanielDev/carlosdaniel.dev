import {
	useContext,
	createContext,
	useMemo,
	useState,
	useCallback,
} from 'react';
import { ThemeProvider as StyledComponentsProvider } from 'styled-components';
import { dark } from './dark';
import { light } from './light';

type ThemeOption = typeof light;

interface Context {
	currentTheme: ThemeOption;
	toggleTheme: () => void;
}

export const ThemeContext = createContext({} as Context);

export const Theme: React.FC = ({ children }) => {
	const INITIAL_THEME = dark;
	const [currentTheme, setCurrentTheme] = useState<ThemeOption>(INITIAL_THEME);

	const toggleTheme = useCallback(() => {
		setCurrentTheme(state => (state?.title === 'dark' ? light : dark));
	}, []);

	const value = useMemo(
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
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('ThemeProvider Error');
	}

	return context;
}
