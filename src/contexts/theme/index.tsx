import {
	useContext,
	createContext,
	useMemo,
	useState,
	useCallback,
} from 'react';
import { ThemeProvider as Provider } from 'styled-components';
import { dark } from './dark';
import { light } from './light';

type ThemeOption = typeof light;

interface Context {
	currentTheme: ThemeOption;
	toggleTheme: () => void;
}

export const ThemeContext = createContext({} as Context);

export const Theme: React.FC = ({ children }) => {
	const [currentTheme, setCurrentTheme] = useState<ThemeOption>(dark);

	const toggleTheme = useCallback(() => {
		console.log({ currentTheme });
		setCurrentTheme(state => (state?.title === 'dark' ? light : dark));
	}, [currentTheme]);

	const value = useMemo(
		() => ({ currentTheme, toggleTheme }),
		[currentTheme, toggleTheme],
	);
	return (
		<ThemeContext.Provider value={value}>
			<ThemeContext.Consumer>
				{context => (
					<Provider theme={context.currentTheme}>{children}</Provider>
				)}
			</ThemeContext.Consumer>
		</ThemeContext.Provider>
	);
};

export function useTheme() {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('MobileProvider Error');
	}

	return context;
}
