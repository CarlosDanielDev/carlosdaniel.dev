import React from 'react';
import { Routes } from './routes';
import GlobalStyles from './styles/global';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
	return (
		<>
			<Routes />
			<GlobalStyles />
		</>
	);
};
