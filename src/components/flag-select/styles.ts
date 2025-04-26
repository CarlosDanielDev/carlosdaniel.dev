import styled, { css } from 'styled-components';

interface ContainerProps {}

interface ItemProps {
	active: boolean;
	enabled: boolean;
}

export const Container = styled.div<ContainerProps>`
	position: relative;
	cursor: pointer;
	min-width: 90px;
	z-index: 20;
`;

export const Flag = styled.img`
	width: 24px;
	height: 24px;
	border-radius: 50%;
	object-fit: cover;
	transition: transform 0.2s ease;
`;

export const ImageContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
`;

export const LabelContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-left: 8px;
	gap: 8px;

	svg {
		transition: transform 0.2s ease;
	}
`;

export const Label = styled.span`
	font-size: 1rem;
	color: ${({ theme }) => theme.palette.title};
	font-weight: 500;
`;

export const Item = styled.div<ItemProps>`
	display: flex;
	padding: 8px 12px;
	align-items: center;
	border-radius: 8px;
	cursor: ${({ enabled }) => (enabled ? 'pointer' : 'not-allowed')};
	opacity: ${({ enabled }) => (enabled ? 1 : 0.5)};
	background: ${({ theme }) => theme.palette.backgroundHover};
	transition: all 0.2s ease;

	&:hover {
		background: ${({ theme, active }) =>
			active ? theme.palette.primary : theme.palette.backgroundHover};

		${Flag} {
			transform: scale(1.1);
		}
	}

	${({ active, theme }) =>
		active &&
		css`
			background: ${theme.palette.primary};

			${Label} {
				color: ${theme.palette.textColorPrimary};
			}

			svg {
				color: ${theme.palette.textColorPrimary};
				transform: rotate(180deg);
			}
		`}
`;

export const List = styled.div`
	position: absolute;
	top: calc(100% + 8px);
	right: 0;
	width: 160px;
	display: flex;
	flex-direction: column;
	gap: 8px;
	background: ${({ theme }) => theme.palette.backgroundHover};
	border-radius: 8px;
	padding: 8px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	animation: fadeIn 0.2s ease;

	@keyframes fadeIn {
		from {
			opacity: 0;
			transform: translateY(-10px);
		}
		to {
			opacity: 1;
			transform: translateY(0);
		}
	}
`;
