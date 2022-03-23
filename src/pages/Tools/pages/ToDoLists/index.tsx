import React from 'react';
import { ErrorInputProps, Input, TextNotFound } from 'src/components';
import { routesTaskKeyName } from 'src/constants';
import { useLocalStorage } from 'src/hooks';
import { generateId } from 'src/utils';
// import { Timer } from 'src/components';
import * as S from './styles';

export type RouteLocal = {
	route: string;
	id: string;
	label: string;
	createdAt: Date;
};

type ChangeInput = React.ChangeEvent<HTMLInputElement>;

interface ToDoListsProps {}

export const ToDoLists: React.FC<ToDoListsProps> = () => {
	const ERROR_INITIAL_STATE = {
		error: false,
		label: '',
	};
	const [error, setError] =
		React.useState<ErrorInputProps>(ERROR_INITIAL_STATE);
	const [loading, setLoading] = React.useState(false);

	const [routes, setRoutes] = useLocalStorage(
		routesTaskKeyName,
		[] as RouteLocal[],
	);

	const checkIfRouteNameAlreadyExists = (routeName: string) => {
		const isEqualLabel = routes.find(route => route.label === routeName);
		const isEqualId = routes.find(route => route.id === generateId(routeName));
		if (isEqualLabel || isEqualId) {
			setError({
				error: true,
				label: 'Ops, esse nome já foi utilizado, tenta outro aí 😅',
			});
			return false;
		}
		return true;
	};

	const submitForm = (routeName: string) => {
		const formattedRoute = routeName.toLowerCase().replaceAll(' ', '-');
		const id = generateId(routeName);
		const newRoute = {
			route: formattedRoute,
			id,
			label: routeName,
			createdAt: new Date(),
		};
		setRoutes(state => [newRoute, ...state]);
	};
	const handleChange = (event: ChangeInput) => {
		const { value } = event.target;
		if (value.length !== 0) {
			setError(ERROR_INITIAL_STATE);
			setLoading(false);
		}
	};

	return (
		<S.Container>
			<S.Title>Crie ou selecione uma área de tasks</S.Title>
			<S.Form
				onSubmit={event => {
					setLoading(true);
					event.preventDefault();
					const formData = new FormData(event.target as HTMLFormElement);
					const workspace = formData.get('workspace');
					const routeExists = checkIfRouteNameAlreadyExists(String(workspace));
					if (!workspace) {
						setError({
							error: true,
							label: 'This field is required',
						});
						return;
					}
					if (!routeExists) return;
					setLoading(false);
					submitForm(String(workspace));
				}}
			>
				<Input
					onChange={event => {
						handleChange(event);
					}}
					name="workspace"
					placeholder="Dê um nome á sua área de tasks"
					error={error}
				/>
				<S.Submit
					disabled={loading}
					type="submit"
					value="Criar nova área de tasks"
				/>
			</S.Form>
			<S.List>
				{routes.length ? (
					routes?.map(item => (
						<S.Item key={item.id} to={item.route}>
							{item.label}
						</S.Item>
					))
				) : (
					<S.EmptyStateContainer>
						<TextNotFound size="small">
							Ainda não tem nada por aqui 🧐
						</TextNotFound>
					</S.EmptyStateContainer>
				)}
			</S.List>
		</S.Container>
	);
};
