import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	#root {
		height: 100%;
	}
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
		font-display: block;
		
		&::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none;
		scrollbar-width: none;
  }

  html {
    font-size: 62.5%;
		height: 100%;
  }

  body {
    font-size: 1.6rem;
		background: ${({ theme }) => theme.palette.background};
		transition: background 0.3s ease-in;
		height: 100%;
    -webkit-font-smoothing: antialiased;

  }

	select, input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }


  button {
    background: transparent;
    cursor: pointer;
  }
`;
