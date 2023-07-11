import { HomeWrapper } from "../style/styled-components"
import { PokeList } from "../components/PokeList"

const Home = () => {

    return (
        <HomeWrapper>
            <div style={{ width: "100%", height: 60, margin: '0 auto' }}><center>TEST</center> </div>
            <PokeList />
        </HomeWrapper>
    )
}

export default Home