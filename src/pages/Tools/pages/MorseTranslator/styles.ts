import { breakpointLandscape } from 'src/constants';
import styled, { css } from 'styled-components';

type LabelProps = {
	withWidth?: boolean;
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h1`
	color: ${({ theme }) => theme.palette.title};
	font-size: 2.8rem;
`;

export const Box = styled.div`
	margin-top: 32px;
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	@media (min-width: ${breakpointLandscape}px) {
		flex-direction: row;
	}
`;

export const InputContainer = styled.div`
	height: 180px;
	position: relative;

	width: 100%;
	border-radius: 8px;
	background: ${({ theme }) => theme.palette.backgroundHover};
	padding: 8px;

	@media (min-width: ${breakpointLandscape}px) {
		width: 49%;
	}
`;

export const Label = styled.h2<LabelProps>`
	font-size: 2.2rem;
	color: ${({ theme }) => theme.palette.title};
	${({ withWidth }) =>
		withWidth &&
		css`
			text-align: center;
			width: 80px;
		`}
`;

export const InputWord = styled.input`
	background: none;
	font-size: 1.6rem;
	margin-top: 16px;
	color: ${({ theme }) => theme.palette.title};
`;

export const OutputMorse = styled.div`
	position: relative;
	height: 180px;
	width: 100%;
	background: ${({ theme }) => theme.palette.backgroundHover};
	margin-left: 1px;
	border-radius: 8px;
	padding: 8px;
	margin-top: 16px;
	@media (min-width: ${breakpointLandscape}px) {
		width: 49%;
		margin-top: 0;
	}
`;

export const OutputWord = styled.p`
	background: none;
	font-size: 1.6rem;
	margin-top: 16px;
	color: ${({ theme }) => theme.palette.title};
	opacity: 0.7;
	letter-spacing: 0.09rem;
	font-weight: bold;
`;

export const Options = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-radius: 8px;
	margin-top: 16px;
	padding: 4px 8px;
	background: ${({ theme }) => theme.palette.backgroundHover};

	svg {
		color: ${({ theme }) => theme.palette.title};
	}
`;

export const ChangeOrderButton = styled.button`
	&:focus {
		svg {
			transform: rotate(180deg);
			-webkit-transform: rotate(180deg);
			-ms-transform: rotate(180deg);
			transition: transform ease-in 0.5s;
		}
	}
`;

export const CopyToClipboardButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 8px;
	border-radius: 4px;
	position: absolute;
	bottom: 16px;
	right: 16px;
	background: ${({ theme }) => theme.palette.background};

	svg {
		color: ${({ theme }) => theme.palette.title};
	}
`;
