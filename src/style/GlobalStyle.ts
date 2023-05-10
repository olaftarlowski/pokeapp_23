import { createGlobalStyle } from "styled-components";

interface ThemeProps {
  theme: {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
  };
}

export const GlobalStyle = createGlobalStyle<ThemeProps>`
    body {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
  `;
