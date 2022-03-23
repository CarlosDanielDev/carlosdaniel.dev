export const calculateTimeLeft = (data: string) => {
	const year = new Date().getFullYear();
	const difference = +new Date(`${data}/${year}`) - +new Date();

	let timeLeft = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	};

	if (difference > 0) {
		timeLeft = {
			days: Math.floor(difference / (1000 * 60 * 60 * 24)),
			hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
			minutes: Math.floor((difference / 1000 / 60) % 60),
			seconds: Math.floor((difference / 1000) % 60),
		};
	}

	return timeLeft;
};

export function parseJSON<T>(value: string | null): T | undefined {
	try {
		return value === 'undefined' ? undefined : JSON.parse(value ?? '');
	} catch {
		console.log('parsing error on', { value });
		return undefined;
	}
}

export const generateId = (value: string) => {
	const formattedValue = value.toLowerCase().replaceAll(/\s/g, '');
	return `@${formattedValue}`;
};
