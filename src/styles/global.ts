import { createGlobalStyle, css } from 'styled-components';
import { enhancedNeonPulse, enhancedGlitch } from './animations';

export default createGlobalStyle`

  #root {
    height: 100%;
    background: transparent;
    position: relative;
    z-index: 0;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Courier New', monospace;
		font-display: block;
  }

  html {
    font-size: 62.5%;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    background: ${({ theme }) => theme?.palette.background};
  }

  body {
    font-size: 1.6rem;
    background: transparent;
    transition: background 0.2s ease-in;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    image-rendering: auto;
    font-family: 'Courier New', monospace;
    line-height: 1.6;
    color: ${({ theme }) => theme?.palette.textColorPrimary};
    position: relative;
    overflow-x: hidden;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: ${({ theme }) => theme?.palette.background};
      opacity: 1;
    }
    
    ${({ theme }) =>
			theme?.title === 'win98' &&
			css`
				&::before {
					background: ${theme?.palette.background};
				}
			`}
    
    ${({ theme }) =>
			theme?.title === 'cyberpunk' &&
			css`
				&::before {
					background: linear-gradient(
						180deg,
						${theme?.palette.background} 0%,
						${theme?.palette.backgroundHover} 100%
					);
					opacity: 0.9;
				}
			`}
  }

	select, input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 1px solid;
    border-color: ${({ theme }) => theme?.palette.buttonShadow} ${({ theme }) =>
	theme?.palette.buttonHighlight} ${({ theme }) =>
	theme?.palette.buttonHighlight} ${({ theme }) => theme?.palette.buttonShadow};
    background-color: ${({ theme }) => theme?.palette.buttonFace};
    color: ${({ theme }) => theme?.palette.buttonText};
    padding: 6px 10px;
    font-family: 'Courier New', monospace;
    
    ${({ theme }) =>
			theme?.title === 'retroComputer' &&
			css`
				background-color: ${theme?.palette.terminal};
				border: 1px solid ${theme?.palette.primary};
				color: ${theme?.palette.textColorPrimary};
				border-radius: 2px;
				padding: 8px 12px;

				&:focus {
					box-shadow: 0 0 0 2px ${theme?.palette.primary}40;
				}
			`}
    
    ${({ theme }) =>
			theme?.title === 'cyberpunk' &&
			css`
				background-color: rgba(10, 17, 40, 0.7);
				border: 1px solid ${theme?.palette.accent2};
				color: ${theme?.palette.accent2};
				box-shadow: 0 0 5px ${theme?.palette.accent2};
			`}
  }

  button {
    background: ${({ theme }) => theme?.palette.buttonFace};
    border: 1px solid;
    border-color: ${({ theme }) => theme?.palette.buttonHighlight} ${({
	theme,
}) => theme?.palette.buttonShadow} ${({ theme }) =>
	theme?.palette.buttonShadow} ${({ theme }) => theme?.palette.buttonHighlight};
    box-shadow: 1px 1px 0px ${({ theme }) => theme?.palette.windowFrame};
    color: ${({ theme }) => theme?.palette.buttonText};
    cursor: pointer;
    padding: 6px 16px;
    margin: 2px;
    font-weight: 500;
    font-family: 'Courier New', monospace;
    
    ${({ theme }) =>
			theme?.title === 'retroComputer' &&
			css`
				background-color: ${theme?.palette.buttonFace};
				border: 1px solid ${theme?.palette.primary};
				color: ${theme?.palette.textColorPrimary};
				border-radius: 2px;
				box-shadow: none;
				transition: all 0.2s ease;
				position: relative;

				&::before {
					content: '';
					position: absolute;
					left: -2px;
					top: -2px;
					right: -2px;
					bottom: -2px;
					border: 1px solid transparent;
					transition: all 0.2s ease;
				}

				&:hover {
					background-color: ${theme?.palette.buttonHighlight};

					&::before {
						border-color: ${theme?.palette.primary}40;
					}
				}

				&:active {
					transform: translateY(1px);
				}
			`}
    
    ${({ theme }) =>
			theme?.title === 'cyberpunk' &&
			css`
				background-color: rgba(10, 17, 40, 0.7);
				border: 1px solid ${theme?.palette.accent2};
				color: ${theme?.palette.textColorPrimary};
				box-shadow: 0 0 5px ${theme?.palette.accent2};
				transition: all 0.3s ease;

				&:hover {
					background-color: rgba(36, 0, 70, 0.8);
					box-shadow: 0 0 10px ${theme?.palette.accent2},
						0 0 20px ${theme?.palette.accent2};
					color: white;
				}
			`}
    
    &:active {
      border-color: ${({ theme }) => theme?.palette.buttonShadow} ${({
	theme,
}) => theme?.palette.buttonHighlight} ${({ theme }) =>
	theme?.palette.buttonHighlight} ${({ theme }) => theme?.palette.buttonShadow};
      box-shadow: none;
      padding: 7px 15px 5px 17px;
    }
    
    &:focus {
      outline: 1px dotted #000000;
      outline-offset: -5px;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    background: ${({ theme }) => theme?.palette.windowHeader};
    color: ${({ theme }) => theme?.palette.activeTitleText};
    padding: 6px 10px;
    margin-bottom: 16px;
    font-weight: bold;
    letter-spacing: 0.5px;
    font-family: 'Courier New', monospace;
    
    ${({ theme }) =>
			theme?.title === 'retroComputer' &&
			css`
				background: transparent;
				color: ${theme?.palette.primary};
				border-bottom: 1px solid ${theme?.palette.primary};
				padding: 8px 0;
				position: relative;

				&::after {
					content: '';
					position: absolute;
					bottom: -1px;
					left: 0;
					width: 100%;
					height: 1px;
					background: linear-gradient(
						to right,
						${theme?.palette.primary},
						${theme?.palette.primary}00
					);
				}
			`}
    
    ${({ theme }) =>
			theme?.title === 'cyberpunk' &&
			css`
				background: transparent;
				color: ${theme?.palette.textColorPrimary};
				text-shadow: 0 0 5px ${theme?.palette.title},
					0 0 10px ${theme?.palette.title};
				animation: ${enhancedNeonPulse} 2s infinite alternate;
				border-bottom: 1px solid ${theme?.palette.accent2};
				padding: 8px 12px;
				letter-spacing: 1px;
			`}
  }
  
  ${({ theme }) =>
		theme?.title === 'retroComputer' &&
		css`
			a {
				color: ${theme?.palette.primary};
				text-decoration: none;
				position: relative;
				transition: all 0.2s ease;
				display: inline-block;

				&::after {
					content: '';
					position: absolute;
					width: 100%;
					height: 1px;
					bottom: 0;
					left: 0;
					background-color: ${theme?.palette.primary};
					transform: scaleX(0);
					transform-origin: bottom right;
					transition: transform 0.3s ease;
				}

				&:hover {
					color: ${theme?.palette.glowText};

					&::after {
						transform: scaleX(1);
						transform-origin: bottom left;
					}
				}
			}

			p {
				line-height: 1.8;
				margin-bottom: 16px;
			}

			code {
				background: ${theme?.palette.terminal};
				color: ${theme?.palette.accent3};
				padding: 2px 5px;
				border-radius: 3px;
				font-family: 'Courier New', monospace;
			}
		`}
  
  ${({ theme }) =>
		theme?.title === 'cyberpunk' &&
		css`
			a {
				color: ${theme?.palette.textColorPrimary};
				text-decoration: none;
				position: relative;
				transition: all 0.3s ease;

				&:hover {
					color: white;
					text-shadow: 0 0 5px ${theme?.palette.accent2},
						0 0 10px ${theme?.palette.accent2};
				}

				&::after {
					content: '';
					position: absolute;
					width: 100%;
					height: 1px;
					bottom: -2px;
					left: 0;
					background-color: ${theme?.palette.accent2};
					box-shadow: 0 0 5px ${theme?.palette.accent2};
					transform: scaleX(0);
					transform-origin: bottom right;
					transition: transform 0.3s ease;
				}

				&:hover::after {
					transform: scaleX(1);
					transform-origin: bottom left;
				}
			}

			p {
				color: ${theme?.palette.textColorPrimary};
				text-shadow: 0 0 2px ${theme?.palette.textColorPrimary};
				margin-bottom: 15px;
				font-weight: 500;
			}

			.highlight {
				color: ${theme?.palette.accent1};
				text-shadow: 0 0 5px ${theme?.palette.accent1},
					0 0 10px ${theme?.palette.accent1};
				animation: ${enhancedGlitch} 5s infinite;
			}
		`}

  p, span, div, a, button, input, select, textarea {
    line-height: 1.6;
  }

  ${({ theme }) =>
		(theme?.title === 'dark' ||
			theme?.title === 'cyberpunk' ||
			theme?.title === 'retroComputer' ||
			theme?.title === 'y2k') &&
		css`
			p,
			span,
			div,
			li {
				color: ${theme?.palette.textColorPrimary || '#FFFFFF'};
				font-weight: 500;
			}
		`}
`;
