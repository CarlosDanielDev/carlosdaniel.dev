/* eslint-disable import/no-cycle */
import {
	Dispatch,
	SetStateAction,
	useCallback,
	useEffect,
	useState,
} from 'react';
import { parseJSON } from 'src/utils';

import { useEventListener } from 'src/hooks';

declare global {
	interface WindowEventMap {
		'local-storage': CustomEvent;
	}
}

type SetValue<T> = Dispatch<SetStateAction<T>>;

export function useLocalStorage<T>(
	key: string,
	initialValue: T,
): [T, SetValue<T>] {
	const readValue = useCallback((): T => {
		if (typeof window === 'undefined') {
			return initialValue;
		}

		try {
			const item = window.localStorage.getItem(key);
			return item ? (parseJSON(item) as T) : initialValue;
		} catch (error) {
			console.warn(`Error reading localStorage key “${key}”:`, error);
			return initialValue;
		}
	}, [initialValue, key]);

	const [storedValue, setStoredValue] = useState<T>(readValue);

	const setValue: SetValue<T> = useCallback(
		value => {
			if (typeof window === 'undefined') {
				console.warn(
					`Tried setting localStorage key “${key}” even though environment is not a client`,
				);
			}

			try {
				const newValue = value instanceof Function ? value(storedValue) : value;

				window.localStorage.setItem(key, JSON.stringify(newValue));

				setStoredValue(newValue);

				window.dispatchEvent(new Event('local-storage'));
			} catch (error) {
				console.warn(`Error setting localStorage key “${key}”:`, error);
			}
		},
		[key, storedValue],
	);

	useEffect(() => {
		setStoredValue(readValue());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleStorageChange = useCallback(() => {
		setStoredValue(readValue());
	}, [readValue]);

	useEventListener('storage', handleStorageChange);

	useEventListener('local-storage', handleStorageChange);

	return [storedValue, setValue];
}
