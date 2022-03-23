import React, { createContext, useContext, useMemo, useState } from 'react';

interface Context {
	enabled: boolean;
	setEnabled(value: boolean): void;
	mobileVisible: boolean;
	setMobileVisible(value: boolean): void;
}

const HeaderContext = createContext({} as Context);

export const HeaderProvider: React.FC = ({ children }) => {
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
		throw new Error('usHeader must be used with an HeaderProvider');
	}

	return context;
};
