import React, { useState } from 'react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';

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

const lightTheme = {
  colors: {
    primary: 'blue',
    secondary: 'green',
    background: 'white',
    text: 'black',
  },
};

const darkTheme = {
  colors: {
    primary: 'purple',
    secondary: 'orange',
    background: 'black',
    text: 'white',
  },
};

const GlobalStyle = createGlobalStyle<ThemeProps>`
  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
`;

const Sidebar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <>
        <GlobalStyle theme={isDarkMode ? darkTheme : lightTheme} />
        <button onClick={toggleTheme}>
          {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        </button>
        <h1>React + TypeScript + Styled Components</h1>
        <p>Sample text</p>
      </>
    </ThemeProvider>
  );
};

export default Sidebar;