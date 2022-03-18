import React from 'react';
import {
	BrowserRouter,
	Routes as Switch,
	Route,
	Outlet,
} from 'react-router-dom';
import { Header, Footer, CenteredContainer, Main } from 'components';
import * as P from 'src/pages';
import * as T from 'src/pages/Tools/pages';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => (
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
					<Route path="todo-list" element={<T.ToDoList />} />
					<Route path="*" element={<P.NotFound />} />
				</Route>
			</Route>
			<Route path="*" element={<P.NotFound />} />
		</Switch>
	</BrowserRouter>
);
