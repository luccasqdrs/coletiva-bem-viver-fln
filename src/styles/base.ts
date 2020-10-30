import { createGlobalStyle } from 'styled-components';

import { resetStyles } from './reset';
import { variables } from './variables';

// stylelint-disable selector-type-no-unknown
export const Styles = createGlobalStyle`
  ${resetStyles}

  :root {
    --scale-element: 1;
    --scale-font: 1;
  }

  html,
  body {
    min-height: 100vh;

    background-color: ${variables.colors.background};
    font-size: 8px;
    @media (min-width: 700px) {
      font-size: 16px;
  }

  html {
    -webkit-overflow-scrolling: touch;
    overflow-x: hidden;
    /* always show the vertical scrollbar so that content doesn't jump */
    overflow-y: scroll;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  /* inherited from <html> */
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {

    position: relative;

    margin: 0;
    /* iOS on orientation change */
    text-size-adjust: 100%;
  }

  h1 {
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    font-size: 2em;
    margin-bottom: 1.5em;
  }

  p {
    font-family: 'Futura', sans-serif;
    font-size: 1.5em;
    text-align: justify;
    margin-bottom: 1.5em;
  }
  b {
    font-weight: bold;
  }

`;
