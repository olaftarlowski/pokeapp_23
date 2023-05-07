import { Outlet } from 'react-router-dom'
import { Header } from '../section'
import { RootLayoutWrapper } from '../style/styled-components'

const RootLayout = () => {
    return (
        <>
            <RootLayoutWrapper>
                <Header />
                <main>
                    <Outlet />
                </main>
                <footer>
                    <hr />
                    <center>stopka hehe</center>
                </footer></RootLayoutWrapper>

        </>
    )
}

export default RootLayout