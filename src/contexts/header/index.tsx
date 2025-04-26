import React, { createContext, useContext, useMemo, useState } from 'react';

interface Context {
	enabled: boolean;
	setEnabled(value: boolean): void;
	mobileVisible: boolean;
	setMobileVisible(value: boolean): void;
}

const HeaderContext = createContext({} as Context);

interface HeaderProviderProps {
	children?: React.ReactNode;
}
export const HeaderProvider: React.FC<HeaderProviderProps> = ({ children }) => {
	const [enabled, setEnabled] = useState(true);
	const [mobileVisible, setMobileVisible] = useState(true);

	const value = useMemo(
		() => ({
			enabled,
			setEnabled,
			mobileVisible,
			setMobileVisible,
		}),
		[enabled, mobileVisible],
	);

	return (
		<HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
	);
};

export const useHeader = () => {
	const context = useContext(HeaderContext);

	if (!context) {
		throw new Error('useHeader must be used with an HeaderProvider');
	}

	return context;
};
