import styled, { css } from 'styled-components';

type Props = {
	active: boolean;
	enabled: boolean;
};

export const Container = styled.div`
	min-width: 40px;
	min-height: 40px;
	border-radius: 20px;
	width: auto;
	position: fixed;
	right: 8px;
	top: 4px;

	display: flex;
	align-items: center;
	justify-content: center;
	background: ${({ theme }) => theme.typography.backgroundHover};
	padding: 8px;
	transition: 0.3s;
	flex-direction: column;
	box-shadow: ${({ theme }) => theme.typography.shadow};

	@media (min-width: 1000px) {
		top: 0px;
		right: -50px;
		position: absolute;
	}
`;

export const Item = styled.li<Props>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-bottom: 8px;
	cursor: pointer;
	${({ active }) =>
		!active
			? css`
					&:hover {
						span {
							display: block;
						}
						.label-container {
							display: flex;
							justify-content: space-between;
						}
					}
					.label-container {
						display: none;
					}
			  `
			: css`
					.label-container {
						justify-content: space-between;
					}
					justify-content: space-between;
					span {
						display: block;
					}
			  `}

	&:last-child {
		margin-bottom: 0;
	}

	${({ enabled }) =>
		!enabled &&
		css`
			cursor: not-allowed;
			filter: blur(1px);
			opacity: 0.5;
		`}
`;

export const Flag = styled.img`
	width: 100%;
	transition: all 0.3s ease-in;
	height: 100%;
	border-radius: 50%;
	object-fit: cover;
	user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
`;

export const ImageContainer = styled.div`
	width: 34px;
	height: 34px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Label = styled.span`
	display: none;
	user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	transition: 0.3s;

	color: ${({ theme }) => theme.typography.title};
`;

export const LabelContainer = styled.div`
	width: 140px;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	margin-left: 16px;

	color: ${({ theme }) => theme.typography.title};
	svg {
		width: 24px;
		height: 24px;
		margin-left: 8px;
	}
`;

export const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	width: 100%;
`;
