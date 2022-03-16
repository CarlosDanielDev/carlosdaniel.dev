import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react';
import { breakpointLandscape, breakpointMobile } from 'src/constants';

type Context = {
	isMobile: boolean;
	isLandscape: boolean;
};

const MobileContext = createContext({} as Context);

export const MobileProvider: React.FC = ({ children }) => {
	const windowWidth = document.body.clientWidth;
	const breakpoint = breakpointMobile;

	const [isMobile, setIsMobile] = useState(() => {
		return windowWidth < breakpoint;
	});

	const [isLandscape, setIsLandscape] = useState(() => {
		return windowWidth < breakpointLandscape;
	});

	const onResizeWindow = useCallback((): void => {
		const currentWindowWidth = document.body.clientWidth;

		setIsMobile(currentWindowWidth < breakpoint);
		setIsLandscape(currentWindowWidth < breakpointLandscape);
	}, [breakpoint]);

	useEffect(() => {
		window.addEventListener('resize', onResizeWindow);
	}, [onResizeWindow]);

	const value = useMemo(
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
	const context = useContext(MobileContext);

	if (!context) {
		throw new Error('MobileProvider Error');
	}

	return context;
};
