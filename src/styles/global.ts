import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;
    font-family: 'Roboto';
		font-display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

	select, input {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  button {
    background: transparent;
    cursor: pointer;
  }

`;
