import React from 'react';
import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';
import * as P from '../pages';

interface RoutesProps {}

export const Routes: React.FC<RoutesProps> = () => (
	<BrowserRouter>
		<Switch>
			<Route path="/" element={<P.Home />} />
			<Route path="/to-japanese" element={<P.ToJapanese />} />
			<Route path="/links" element={<P.Links />} />
		</Switch>
	</BrowserRouter>
);
