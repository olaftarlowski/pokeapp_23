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

export { theme };
