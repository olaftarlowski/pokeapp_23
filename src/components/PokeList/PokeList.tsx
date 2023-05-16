import { useEffect, useState } from "react"
// import { fetchRegionKanto } from "../../utils/api"
import { PokeListWrapper } from "../../style/styled-components"
import { PokeListItem } from "./"
import { LoadingSpinner } from "../common"
import { useOutletContext } from "react-router-dom"
import { Single, ApiData } from "../../utils/types/pokeList"

function useKanto() {
    return useOutletContext<ApiData | undefined>();
}

const PokeList = () => {
    const kantoData = useKanto();
    const [data, setData] = useState<Single[]>([])
    const [hasError, setHasError] = useState<boolean>(false)

    useEffect(() => {
        if (kantoData) {
            setData(kantoData.data.pokemon_entries)
        } else {
            setHasError(true)
            setData([])
        }
    }, [kantoData]);

    const imageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    return (
        <PokeListWrapper>
            {data?.length !== 0 ? (
                <>
                    {data?.map((item: Single) => {
                        return <PokeListItem key={item.entry_number} id={item.entry_number} name={item.pokemon_species.name} sprite={`${imageLink}${item.entry_number}.png`}></PokeListItem>
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