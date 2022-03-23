import React from 'react';
import { breakpointLandscape, breakpointMobile } from 'src/constants';

type Context = {
	isMobile: boolean;
	isLandscape: boolean;
};

const MobileContext = React.createContext({} as Context);

export const MobileProvider: React.FC = ({ children }) => {
	const windowWidth = document.body.clientWidth;
	const breakpoint = breakpointMobile;

	const [isMobile, setIsMobile] = React.useState(() => {
		return windowWidth < breakpoint;
	});

	const [isLandscape, setIsLandscape] = React.useState(() => {
		return windowWidth < breakpointLandscape;
	});

	const onResizeWindow = React.useCallback((): void => {
		const currentWindowWidth = document.body.clientWidth;

		setIsMobile(currentWindowWidth < breakpoint);
		setIsLandscape(currentWindowWidth < breakpointLandscape);
	}, [breakpoint]);

	React.useEffect(() => {
		window.addEventListener('resize', onResizeWindow);
	}, [onResizeWindow]);

	const value = React.useMemo(
		() => ({
			isMobile,
			onResizeWindow,
			isLandscape,
		}),
		[isMobile, onResizeWindow, isLandscape],
	);

	return (
		<MobileContext.Provider value={value}>{children}</MobileContext.Provider>
	);
};

export const useMobile = (): Context => {
	const context = React.useContext(MobileContext);

	if (!context) {
		throw new Error('MobileProvider Error');
	}

	return context;
};
