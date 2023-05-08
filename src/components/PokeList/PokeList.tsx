import { useEffect, useState } from "react"
import { fetchRegionKanto } from "../../utils/api"
import { PokeListWrapper } from "../../style/styled-components"
import { PokeListItem } from "./"
import { LoadingSpinner } from "../common"

const PokeList = () => {

    const [data, setData] = useState<[] | null>([])
    const [hasError, setHasError] = useState<boolean>(false)

    const getData = async () => {
        const dataReceived = await fetchRegionKanto()
        // console.log(dataReceived);
        if (dataReceived === null) {
            setHasError(true)
            return
        } else if (dataReceived) {
            setData(dataReceived?.data.pokemon_entries)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const imageLink = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

    return (
        <PokeListWrapper>{data?.length !== 0 ? (
            <>
                {data?.map((item: { pokemon_species: { name: string, }, entry_number: number }) => {
                    return <PokeListItem id={item.entry_number} name={item.pokemon_species.name} sprite={`${imageLink}${item.entry_number}.png`}></PokeListItem>
                })}
            </>
        ) : (
            <LoadingSpinner/>
        )}
            {hasError && <p>An error has occured...</p>}</PokeListWrapper>
    )
}

export default PokeList