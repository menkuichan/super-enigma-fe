import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

export default createGlobalStyle`
  ${normalize}

  a {
    color: inherit; /* blue colors for links too */
    text-decoration: inherit;
  }

  * {
    box-sizing: border-box;
  }
`;
