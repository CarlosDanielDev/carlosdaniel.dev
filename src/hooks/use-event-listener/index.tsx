/* eslint-disable import/no-cycle */
import { RefObject, useEffect, useRef } from 'react';

import { useIsomorphicLayoutEffect } from 'src/hooks';

export function useEventListener<
	KW extends keyof WindowEventMap,
	KH extends keyof HTMLElementEventMap,
	T extends HTMLElement | void = void,
>(
	eventName: KW | KH,
	handler: (
		event: WindowEventMap[KW] | HTMLElementEventMap[KH] | Event,
	) => void,
	element?: RefObject<T>,
) {
	const savedHandler = useRef(handler);

	useIsomorphicLayoutEffect(() => {
		savedHandler.current = handler;
	}, [handler]);

	useEffect(() => {
		const targetElement: T | Window = element?.current || window;
		if (!(targetElement && targetElement.addEventListener)) {
			return;
		}

		const eventListener: typeof handler = event => savedHandler.current(event);

		targetElement.addEventListener(eventName, eventListener);

		// eslint-disable-next-line consistent-return
		return () => {
			targetElement.removeEventListener(eventName, eventListener);
		};
	}, [eventName, element]);
}
