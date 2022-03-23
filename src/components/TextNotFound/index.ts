import styled, { css } from 'styled-components';

type SizeValues = 'small' | 'medium' | 'large';

type TextProps = {
	size: SizeValues;
};

export const TextNotFound = styled.h2<TextProps>`
	font-family: 'Rubik';
	${({ size }) => {
		switch (size) {
			case 'large':
				return css`
					font-size: 10rem;
				`;
			case 'medium':
				return css`
					font-size: 5rem;
				`;
			case 'small':
				return css`
					font-size: 2rem;
				`;
			default:
				return css`
					font-size: 10rem;
				`;
		}
	}};
	color: ${({ theme }) => theme.palette.title};
`;
