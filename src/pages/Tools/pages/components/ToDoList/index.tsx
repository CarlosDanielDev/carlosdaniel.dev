import React from 'react';
import { CheckSquare, Square, Plus } from 'react-feather';
import { ErrorInputProps, Input, TextNotFound } from 'src/components';
import { dataKeyNamePreset } from 'src/constants';
import { useLocalStorage } from 'src/hooks';
import { generateId } from 'src/utils';
import { RouteLocal } from '../../ToDoLists';
import * as S from './styles';

interface ToDoListProps {
	data: RouteLocal;
}

type ToDo = {
	done: boolean;
	label: string;
	id: string;
	createdAt: Date;
	deleted: boolean;
};

type ChangeEvent = React.ChangeEvent<HTMLInputElement>;

type FormEvent = React.FormEvent<HTMLFormElement>;

export const ToDoList: React.FC<ToDoListProps> = ({ data }) => {
	const INITIAL_ERROR_STATE = {
		error: false,
		label: '',
	};
	const formRef = React.useRef<HTMLFormElement>(null);
	const [error, setError] =
		React.useState<ErrorInputProps>(INITIAL_ERROR_STATE);
	const [toDos, setToDos] = useLocalStorage(
		`${dataKeyNamePreset}${data.route}`,
		[] as ToDo[],
	);

	const handleToggleCheckToDo = React.useCallback(
		(toDo: ToDo) => {
			setToDos(prevState => {
				const filteredState = prevState.find(state => state.id === toDo.id);
				const dataRemovedToDo = prevState.filter(state => state.id !== toDo.id);
				if (!filteredState) return prevState;
				const newObject = { ...filteredState, done: !filteredState?.done };
				return [...dataRemovedToDo, newObject];
			});
		},
		[setToDos],
	);

	const checkIfTaskExists = React.useCallback(
		(taskName: string) => {
			const id = generateId(taskName);
			const isEqualId = toDos.find(item => item.id === id);
			return !!isEqualId;
		},
		[toDos],
	);

	const handleInputChange = (event: ChangeEvent) => {
		const { value } = event.target;
		if (value.length) setError(INITIAL_ERROR_STATE);
	};

	const handleSubmit = React.useCallback(
		(toDoName: string) => {
			const id = generateId(toDoName);
			const newToDo = {
				done: false,
				label: toDoName.toLowerCase(),
				id,
				createdAt: new Date(),
				deleted: false,
			};
			setToDos(prevState => [newToDo, ...prevState]);
		},
		[setToDos],
	);

	const onSubmit = React.useCallback(
		(event: FormEvent) => {
			event.preventDefault();
			const formData = new FormData(event.target as HTMLFormElement);
			const task = formData.get('task');
			const taskExists = checkIfTaskExists(String(task));
			if (taskExists) {
				setError({
					error: true,
					label: 'Ei, você já criou ess task 😛',
				});
				return;
			}
			handleSubmit(String(task));
			formRef?.current?.reset();
		},
		[checkIfTaskExists, handleSubmit],
	);

	React.useEffect(() => {
		if (toDos?.length) toDos.sort((a, b) => Number(a.done) - Number(b.done));
	}, [toDos]);

	return (
		<S.Container>
			<S.Title>{data.label}</S.Title>
			<S.Form autoComplete="off" ref={formRef} onSubmit={onSubmit}>
				<Input
					onChange={handleInputChange}
					placeholder="Qual é a sua próxima tarefa ?"
					name="task"
					error={error}
					max={80}
					min={3}
					required
				/>
				<S.Submit type="submit">
					<Plus />
				</S.Submit>
			</S.Form>
			{toDos?.length !== 0 ? (
				<S.List>
					{toDos
						.filter(item => item.deleted !== true)
						.map(toDo => (
							<S.Item
								done={toDo.done}
								key={toDo.id}
								onClick={() => handleToggleCheckToDo(toDo)}
							>
								{toDo.done ? <CheckSquare size={32} /> : <Square size={32} />}
								<S.Label>{toDo.label}</S.Label>
							</S.Item>
						))}
				</S.List>
			) : (
				<S.EmptyContainer>
					<TextNotFound size="small">
						Parece que você ainda não criou nenhuma task 🤔
					</TextNotFound>
				</S.EmptyContainer>
			)}
		</S.Container>
	);
};
