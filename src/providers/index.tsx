import React from 'react';
import { MobileProvider, Theme } from 'src/contexts';

interface RootProviderProps {}

export const RootProvider: React.FC<RootProviderProps> = ({ children }) => {
	const providers = [Theme, MobileProvider];

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
