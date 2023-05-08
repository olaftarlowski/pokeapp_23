import { useEffect, useState } from "react"
import { fetchRegionKanto } from "../utils/api"
import { HomeWrapper } from "../style/styled-components"
import { PokeList } from "../components/PokeList"

const Home = () => {




    return (
        <HomeWrapper>
            <PokeList/>
        </HomeWrapper>
    )
}

export default Home