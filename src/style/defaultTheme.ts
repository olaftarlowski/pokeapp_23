import { DefaultTheme } from "styled-components";

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

const breakpoints = {
  desktop: 1440,
  tablet: 900,
  smallMobile: 400,
  mobile: 768,
};

const colors = {
  background: "#fff",
  text: "#000",
  primary: "#f8fafd",
  secondary: "yellow",
  active: "#3861fb",
  border: "#d2d2d2",
};

const darkColors = {
  background: "#000",
  text: "#fff",
  primary: "#232323",
  secondary: "green",
  active: "#fff",
  border: "#000",
};

const theme: MainTheme = {
  breakpoints,
  colors,
};

const darkTheme: MainTheme = {
  breakpoints,
  colors: darkColors,
};

export { theme, darkTheme };
