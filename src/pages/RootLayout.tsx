import { Outlet, useLoaderData } from 'react-router-dom'
import { useContext, useEffect, useState } from "react";
import { darkTheme, theme as lightTheme } from "../style/defaultTheme"
import { ThemeProvider } from 'styled-components';
import { Header } from '../section'
import { RootLayoutWrapper } from '../style/styled-components'
import { SideMenu } from '../components';
import { GlobalStyle } from '../style/GlobalStyle';
import { PokeListContext } from '../store/AppContext';

const getLocalStorage = (themeOption: string): boolean => {
    const dataOption = localStorage.getItem(themeOption);
    if (dataOption === "true") {
        return true;
    }
    return false;
};

type Single = { entry_number: number, pokemon_species: { name: string } }
type Record = { pokemon_entries: Single[] }

type RootData = { data: Record };


const RootLayout = () => {
    const kantoData = useLoaderData() as RootData;
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
                <SideMenu positionToRight={false}>
                    <div>asd</div>
                    <button onClick={checkContext}>chech global state</button>
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
