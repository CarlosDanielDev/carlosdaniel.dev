import styled, { keyframes } from 'styled-components';

const neonFlicker = keyframes`
  0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
    text-shadow: 
      0 0 5px #0066FF,
      0 0 10px #0066FF,
      0 0 15px #0066FF,
      0 0 20px #0066FF;
  }
  20%, 24%, 55% {
    text-shadow: none;
  }
`;

export const Container = styled.div``;

export const Box = styled.div`
	display: flex;
	align-items: center;
	position: relative;
	padding: 5px 10px;

	&::before {
		content: '';
		position: absolute;
		left: 0;
		bottom: 0;
		width: 0;
		height: 2px;
		background: ${({ theme }) => theme.palette.primary};
		transition: width 0.4s ease;
	}

	&:hover::before {
		width: 100%;
	}

	&:hover span {
		animation: ${neonFlicker} 2s infinite;
	}
`;

export const Letter = styled.span`
	font-size: 1.4rem;
	font-weight: bold;
	color: ${({ theme }) => theme.palette.title};
	letter-spacing: 0.5px;
	transition: all 0.3s ease;
	font-family: 'Courier New', monospace;
`;
