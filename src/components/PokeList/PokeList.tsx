import { useContext, useEffect, useState } from "react"
// import { fetchRegionKanto } from "../../utils/api"
import { PokeListWrapper } from "../../style/styled-components"
import { PokeListItem } from "./"
import { LoadingSpinner } from "../common"
import { useOutletContext } from "react-router-dom"
import { Single, ApiData } from "../../utils/types/pokeList"
import { v4 as uuidv4 } from 'uuid';
import { PokeListContext, usePokeListContext } from "../../store/AppContext"


import { fetchRegionKanto } from "../../utils/api"

// function useKanto() {
//     return useOutletContext<ApiData | undefined>();
// }

const PokeList = () => {
    const { kantoRecords } = usePokeListContext();
    // const { kantoRecords, addKantoRecords } = useContext(PokeListContext);


    // const kantoData = useKanto();

    // const [data, setData] = useState<Single[]>([])
    const [hasError, setHasError] = useState<boolean>(false)
    const imageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    const data = kantoRecords?.pokemon_entries;
    // useEffect(() => {
    //     const add = fetchRegionKanto()
    //     if (addKantoRecords) {
    //         addKantoRecords(kantoData)
    //         // setData(kantoData.data.pokemon_entries)
    //     } else {
    //         setHasError(true)
    //         // setData([])
    //     }
    // }, [kantoData]);

    const checll = () => {
        console.log(kantoRecords?.pokemon_entries);
        
    }


    return (
        <PokeListWrapper>
            <div >TESTY

                <button onClick={checll}>TESTT</button>
            </div>
            {data?.length !== 0 ? (
                <>
                    {data?.slice(0).reverse().map((item: Single) => {
                        const elementId = uuidv4();
                        return <PokeListItem key={elementId} id={elementId} name={item.pokemon_species.name} entryNumber={item.entry_number} sprite={`${imageLink}${item.entry_number}.png`}></PokeListItem>
                    })}
                </>
            ) : (
                <p>Empty data</p>
            )}
            {!hasError && !data && <LoadingSpinner />}
            {hasError && <p>An error has occured...</p>}

        </PokeListWrapper>
    )
}

export default PokeList