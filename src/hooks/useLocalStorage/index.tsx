import { useEffect, useState } from 'react';
import { light } from 'src/contexts/theme/light';

type Theme = typeof light;

export function useLocalStorage(key: string, initialState: Theme) {
	const [state, setState] = useState(() => {
		const storageValue = localStorage.getItem(key);

		if (storageValue) {
			return JSON.parse(storageValue);
		}
		return initialState;
	});

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(initialState));
	}, [key, initialState]);

	return [state, setState];
}
