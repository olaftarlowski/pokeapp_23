import { DefaultTheme } from "styled-components";

export interface ThemeProps {
  theme: {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      text: string;
    };
  };
}

export type MainTheme = DefaultTheme & {
  breakpoints: {
    desktop: number;
    tablet: number;
    smallMobile: number;
    mobile: number;
  };
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    active: string;
  };
};
