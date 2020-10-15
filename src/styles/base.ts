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

`;
