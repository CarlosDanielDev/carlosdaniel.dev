import React, { useState, useEffect } from 'react';
import { Watch } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { calculateTimeLeft } from 'src/utils';
import * as S from './styles';

interface TimerProps {
	until: string;
}

export const Timer: React.FC<TimerProps> = ({ until }) => {
	const { t } = useTranslation();
	const [time, setTime] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		setTimeout(() => {
			setTime(calculateTimeLeft(until));
		}, 1000);
	}, [time, until]);

	if (time.hours <= 0) {
		return <div />;
	}
	return (
		<>
			<Watch size={40} />
			<S.TimeContainer>
				<S.Span>{String(time.hours).padStart(2, '0')}</S.Span>
				<S.Span>:</S.Span>
				<S.Span>{String(time.minutes).padStart(2, '0')}</S.Span>
				<S.Span>:</S.Span>
				<S.Span>{String(time.seconds).padStart(2, '0')}</S.Span>
			</S.TimeContainer>
			<S.Caption>{t('components.timer.message')}</S.Caption>
		</>
	);
};
