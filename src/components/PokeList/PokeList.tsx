import { useEffect, useState } from "react"
import { usePokeListContext } from "../../utils/hooks/usePokeListContext"
import { PokeListItem } from "./"
import { LoadingSpinner } from "../common"
import { Single } from "../../utils/types/pokeList"
import { PokeListWrapper } from "../../style/styled-components"
// import { useOutletContext } from "react-router-dom"



const PokeList = () => {
    // const kantoData = useKanto();
    const { kantoRecords } = usePokeListContext();
    const [hasError, setHasError] = useState<boolean>(false)
    const data = kantoRecords;

    console.log(data);
    
    useEffect(() => {
        if (!data) {
            setHasError(true)

        }
    }, [data]);

    const checll = () => {
        console.log(kantoRecords);
    }

    return (
        <>
            <div >
                <h3>TESTY</h3>
                <button onClick={checll}>TESTT</button>
            </div>
            <PokeListWrapper>
                {data?.length !== 0 ? (
                    <>
                        {data?.slice(0).reverse().map((item: Single) => {
                            return <PokeListItem key={item.id} id={item.id} name={item.pokemon_species.name} entryNumber={item.entry_number} sprite={item.sprite}></PokeListItem>
                        })}
                    </>
                ) : (
                    <p>Empty data</p>
                )}
                {!hasError && !data && <LoadingSpinner />}
                {hasError && <p>An error has occured...</p>}

            </PokeListWrapper>
        </>
    )
}

export default PokeList