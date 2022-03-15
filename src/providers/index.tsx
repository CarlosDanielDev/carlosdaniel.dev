import React from 'react';
import { ThemeProvider } from 'src/contexts';

interface RootProviderProps {}

export const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
	const providers = [ThemeProvider];

	return (
		<>
			{providers.reduce(
				(Acc, Provider) => (
					<Provider>{Acc}</Provider>
				),
				children,
			)}
		</>
	);
};
