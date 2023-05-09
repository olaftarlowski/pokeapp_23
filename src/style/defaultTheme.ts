import { DefaultTheme } from "styled-components";

export type MainTheme = DefaultTheme & {
  breakpoints: {
    desktop: number;
    tablet: number;
    smallMobile: number;
    mobile: number;
  };
};

const theme: MainTheme = {
  breakpoints: {
    desktop: 1440,
    tablet: 900,
    smallMobile: 400,
    mobile: 768,
  },
};

//////////////////////
interface Colors {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
}
interface ThemeProps {
  theme: Colors;
}

const lightTheme: Colors = {
  colors: {
    primary: "blue",
    secondary: "green",
    background: "white",
    text: "black",
  },
};

const darkTheme: Colors = {
  colors: {
    primary: "purple",
    secondary: "orange",
    background: "black",
    text: "white",
  },
};

export { theme, lightTheme, darkTheme };
