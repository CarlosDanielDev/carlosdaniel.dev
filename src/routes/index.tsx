import React from 'react';
import {
	BrowserRouter,
	Routes as Switch,
	Route,
	Outlet,
} from 'react-router-dom';
import { Header, Footer, CenteredContainer } from 'components';
import * as P from '../pages';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => (
	<BrowserRouter>
		<Switch>
			<Route
				path="/"
				element={
					<div style={{ maxHeight: '100vh' }}>
						<CenteredContainer>
							<Header />
							<Outlet />
						</CenteredContainer>
						<Footer />
					</div>
				}
			>
				<Route path="/" element={<P.Home />} />
				<Route path="/to-japanese" element={<P.ToJapanese />} />
				<Route path="/links" element={<P.Links />} />
			</Route>
		</Switch>
	</BrowserRouter>
);
