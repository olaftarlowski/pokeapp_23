import { useEffect, useState } from "react"
// import { fetchRegionKanto } from "../../utils/api"
import { PokeListWrapper } from "../../style/styled-components"
import { PokeListItem } from "./"
import { LoadingSpinner } from "../common"
import { useOutletContext } from "react-router-dom"
import { Single, ApiData } from "../../utils/types/pokeList"
import { v4 as uuidv4 } from 'uuid';

function useKanto() {
    return useOutletContext<ApiData | undefined>();
}

const PokeList = () => {
    const kantoData = useKanto();
    const [data, setData] = useState<Single[]>([])
    const [hasError, setHasError] = useState<boolean>(false)
    const imageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    useEffect(() => {
        if (kantoData) {
            setData(kantoData.data.pokemon_entries)
        } else {
            setHasError(true)
            setData([])
        }
    }, [kantoData]);


    return (
        <PokeListWrapper>
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
            {!hasError && data.length === 0 && <LoadingSpinner />}
            {hasError && <p>An error has occured...</p>}

        </PokeListWrapper>
    )
}

export default PokeList