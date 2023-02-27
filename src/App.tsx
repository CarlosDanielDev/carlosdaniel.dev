import React from 'react';
import { Routes } from './routes';
import GlobalStyles from './styles/global';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()


interface AppProps { }

export const App: React.FC<AppProps> = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <GlobalStyles />
    </QueryClientProvider>
  );
};
