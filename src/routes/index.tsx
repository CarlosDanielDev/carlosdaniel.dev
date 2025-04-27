import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header, Main, Footer } from 'src/components';
import { CenteredContainer } from 'src/components/container';
import * as P from 'src/pages';
import styled, { css } from 'styled-components';

const FullHeightWrapper = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	position: relative;
	z-index: 0;
	background: ${({ theme }) => theme?.palette.background};

	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background: ${({ theme }) => theme?.palette.background};
	}

	${({ theme }) =>
		theme?.title === 'cyberpunk' &&
		css`
			background: transparent;
			&::before {
				background: linear-gradient(
					180deg,
					${theme?.palette.background} 0%,
					${theme?.palette.backgroundHover} 100%
				);
				opacity: 0.9;
			}
		`}
`;

const ContentArea = styled.div`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative;
	z-index: 1;
`;

export const AppRoutes: React.FC = () => {
	return (
		<BrowserRouter>
			<FullHeightWrapper>
				<Header />
				<ContentArea>
					<CenteredContainer>
						<Main>
							<Routes>
								<Route path="/" element={<P.Home />} />
								<Route path="/terminal" element={<P.Terminal />} />
								<Route path="/to-japanese" element={<P.ToJapanese />} />
								<Route path="/links" element={<P.Links />} />
								<Route path="/about" element={<P.About />} />
								<Route path="*" element={<P.NotFound />} />
							</Routes>
						</Main>
					</CenteredContainer>
				</ContentArea>
				<Footer />
			</FullHeightWrapper>
		</BrowserRouter>
	);
};
