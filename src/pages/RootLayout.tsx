import { Outlet, useLoaderData } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { darkTheme, theme as lightTheme } from "../style/defaultTheme"
import { ThemeProvider } from 'styled-components';
import { Header } from '../section'
import { RootLayoutWrapper } from '../style/styled-components'
import { SideMenu, SideMenuPlayer } from '../components/SideMenu';
import { GlobalStyle } from '../style/GlobalStyle';
import { PokeListContext } from '../store/AppContext';
import { ApiData } from '../utils/types/pokeList';

const getLocalStorage = (themeOption: string): boolean => {
    const dataOption = localStorage.getItem(themeOption);
    if (dataOption === "true") {
        return true;
    }
    return false;
};

const RootLayout = () => {
    const kantoData = useLoaderData() as ApiData;
    const { selectedRecords } = useContext(PokeListContext);

    const [isDarkMode, setIsDarkMode] = useState<boolean>(getLocalStorage("isDarkMode"));

    useEffect(() => {
        localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
    }, [isDarkMode])

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    const checkContext = () => {
        console.log(selectedRecords);

    }

    return (
        <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyle theme={isDarkMode ? darkTheme : lightTheme} />
            <RootLayoutWrapper>
                <Header />
                <button onClick={toggleTheme}>
                    {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                </button>
                <button onClick={checkContext}>check global state</button>
                <SideMenu positionToRight={false}>
                    <h2>Player team</h2>
                    <SideMenuPlayer />
                </SideMenu>
                <SideMenu positionToRight={true}> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias itaque dolore aut reiciendis. Recusandae, expedita. Debitis dicta autem ratione minus ipsam, iste, voluptatem cumque quasi inventore id quisquam nesciunt voluptas.</p></SideMenu>
                <main>
                    <Outlet context={kantoData} />
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
