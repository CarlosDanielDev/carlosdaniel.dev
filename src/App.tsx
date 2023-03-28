import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Routes } from './routes';
import GlobalStyles from './styles/global';

const queryClient = new QueryClient();

interface AppProps {}

export const App: React.FC<AppProps> = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Routes />
			<GlobalStyles />
		</QueryClientProvider>
	);
};
