import React from 'react';
import { BrowserRouter, Routes as Switch, Route, Outlet } from 'react-router-dom';
import { Header, CenteredContainer, Main, Footer } from 'components';
import * as P from 'src/pages';
import * as T from 'src/pages/Tools/pages';
import { RouteLocal, ToDoList, MorseTranslator } from 'src/pages/Tools/pages';
import { routesTaskKeyName } from 'src/constants';
import { useLocalStorage } from 'src/hooks';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => {
	const [taskRoutes] = useLocalStorage(routesTaskKeyName, [] as RouteLocal[]);
	return (
		<BrowserRouter>
			<Switch>
				<Route
					path="/"
					element={
						<>
							<CenteredContainer>
								<Header />
								<Main>
									<Outlet />
								</Main>
							</CenteredContainer>
							<Footer />
						</>
					}
				>
					<Route path="/" element={<P.Home />} />

					<Route path="/to-japanese" element={<P.ToJapanese />} />
					<Route path="/links" element={<P.Links />} />
					<Route path="/tools">
						<Route index element={<P.Tools />} />
						<Route path="morse" element={<MorseTranslator />} />
						<Route path="task-list">
							<Route index element={<T.ToDoLists />} />
							{taskRoutes.length &&
								taskRoutes.map(taskRoute => (
									<Route
										key={`route::${taskRoute.id}`}
										path={taskRoute.route}
										element={<ToDoList data={taskRoute} />}
									/>
								))}
						</Route>
						<Route path="*" element={<P.NotFound />} />
					</Route>
				</Route>
				<Route path="*" element={<P.NotFound />} />
			</Switch>
		</BrowserRouter>
	);
};
