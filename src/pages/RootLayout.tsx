import { Outlet } from 'react-router-dom'
import { useState } from "react";
import { darkTheme, theme as lightTheme } from "../style/defaultTheme"
import { ThemeProvider } from 'styled-components';
import { Header } from '../section'
import { RootLayoutWrapper } from '../style/styled-components'
import { SideMenu } from '../components';
import { GlobalStyle } from '../style/GlobalStyle';


const RootLayout = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyle theme={isDarkMode ? darkTheme : lightTheme} />
            <RootLayoutWrapper>
                <Header />
                <button onClick={toggleTheme}>
                    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
                <SideMenu />
                <main>
                    <Outlet />
                </main>
                <footer>
                    <hr />
                    <center>stopka hehe</center>
                </footer>
            </RootLayoutWrapper>
        </ThemeProvider>
    )
}

export default RootLayout