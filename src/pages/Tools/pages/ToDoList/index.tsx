import React, { useEffect, useState } from 'react';
import { Watch } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { calculateTimeLeft } from 'src/utils';
import * as S from './styles';

interface ToDoListProps {}

export const ToDoList: React.FC<ToDoListProps> = () => {
	const { t } = useTranslation();
	const [time, setTime] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0,
	});

	useEffect(() => {
		setTimeout(() => {
			setTime(calculateTimeLeft('03/19'));
		}, 1000);
	}, [time]);

	if (time.hours <= 0) {
		return <div />;
	}

	return (
		<S.Container>
			<Watch size={40} />
			<S.TimeContainer>
				<S.Span>{String(time.hours).padStart(2, '0')}</S.Span>
				<S.Span>:</S.Span>
				<S.Span>{String(time.minutes).padStart(2, '0')}</S.Span>
				<S.Span>:</S.Span>
				<S.Span>{String(time.seconds).padStart(2, '0')}</S.Span>
			</S.TimeContainer>
			<S.Caption>{t('components.timer.message')}</S.Caption>
		</S.Container>
	);
};
