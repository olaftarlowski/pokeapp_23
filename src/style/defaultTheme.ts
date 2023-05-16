import { MainTheme } from "../utils/types/mainTheme";

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
  secondary: "#f2f2f2",
  active: "#3861fb",
  border: "#d2d2d2",
};

const darkColors = {
  background: "#000",
  text: "#fff",
  primary: "#232323",
  secondary: "#3c3c3c",
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
