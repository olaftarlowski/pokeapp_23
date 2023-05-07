import { Outlet } from 'react-router-dom'
import { Header } from '../section'

const RootLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>
                <hr />
                <center>stopka hehe</center>
            </footer>
        </div>
    )
}

export default RootLayout