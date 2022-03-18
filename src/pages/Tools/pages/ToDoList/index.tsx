import React from 'react';
import { Timer } from 'src/components';
import * as S from './styles';

interface ToDoListProps {}

export const ToDoList: React.FC<ToDoListProps> = () => {
	return (
		<S.Container>
			<Timer until="03/19" />
		</S.Container>
	);
};
