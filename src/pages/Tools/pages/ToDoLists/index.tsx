import React from 'react';
import {
	ErrorInputProps,
	GoBackButton,
	Input,
	TextNotFound,
} from 'src/components';
import { Trash } from 'react-feather';
import { routesTaskKeyName, dataKeyNamePreset } from 'src/constants';
import { useLocalStorage } from 'src/hooks';
import { dateFormatDDMMYYYY, generateId } from 'src/utils';
import { useTranslation } from 'react-i18next';
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
	const { i18n } = useTranslation();

	const [routes, setRoutes] = useLocalStorage(
		routesTaskKeyName,
		[] as RouteLocal[],
	);

	const removeRouteItem = (id: string) => {
		const newRoutes = routes.filter(item => item.id !== id);
		const item = routes.find(route => route.id === id);
		localStorage.removeItem(`${dataKeyNamePreset}${item?.route}`);

		setRoutes(newRoutes);
	};

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
			<GoBackButton />
			<S.Title>Crie ou selecione uma área de tasks</S.Title>
			<S.Form
				autoComplete="off"
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
			<S.List size={routes.length}>
				{routes.length ? (
					routes?.map((item: RouteLocal) => (
						<S.Item key={item.id}>
							<S.DateContainer>
								<S.DateInfo>
									{dateFormatDDMMYYYY(new Date(item.createdAt), i18n.language)}
								</S.DateInfo>
							</S.DateContainer>
							<S.LinkItem to={item.route}>{item.label}</S.LinkItem>
							<S.TrashContainer onClick={() => removeRouteItem(item.id)}>
								<Trash size={20} />
							</S.TrashContainer>
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
