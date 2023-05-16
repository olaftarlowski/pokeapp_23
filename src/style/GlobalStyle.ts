import { createGlobalStyle } from "styled-components";
import { ThemeProps  } from "../utils/types/mainTheme";

export const GlobalStyle = createGlobalStyle<ThemeProps>`
    body {
      background-color: ${({ theme }) => theme.colors.background};
      color: ${({ theme }) => theme.colors.text};
      font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    }
  `;
