import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`;
