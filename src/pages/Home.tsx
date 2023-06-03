import { HomeWrapper } from "../style/styled-components"
import { PokeList } from "../components/PokeList"
// import { useParams } from "react-router-dom"
// import { useContext, useEffect } from "react";
// import { PokeListContext } from "../store/AppContext";

const Home = () => {
    // const { pageRegion } = useParams<Record<string, string | undefined>>();
    // const { setNewRegion } = useContext(PokeListContext);
    // console.log(pageRegion);

    // useEffect(() => {

    //     if (pageRegion) {
    //         setNewRegion(pageRegion)
    //     }


    // }, [])


    return (
        <HomeWrapper>
            <div style={{ width: "100%", height: 40, margin: '0 auto' }}><center>TEST</center> </div>
            <PokeList />
        </HomeWrapper>
    )
}

export default Home