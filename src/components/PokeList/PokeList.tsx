import { useEffect, useState } from "react"
import { usePokeListContext } from "../../utils/hooks/usePokeListContext"
import { PokeListItem } from "./"
import { LoadingSpinner } from "../common"
import { SingleRecord } from "../../utils/types/pokeList"
import { PokeListWrapper } from "../../style/styled-components"
// import { useParams } from "react-router-dom"
// import { useOutletContext } from "react-router-dom"


const PokeList = () => {
    // const { pageRegion } = useParams<Record<string, string | undefined>>();
    // console.log(pageRegion);

    // const kantoData = useKanto();
    const { kantoRecords } = usePokeListContext();
    const [hasError, setHasError] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(true);
    console.log(kantoRecords);

    const data = kantoRecords;

    useEffect(() => {
        if (!data) {
            setIsLoading(true);
            setHasError(false);
        } else {
            setIsLoading(false);
        }
    }, [data]);


    return (
        <PokeListWrapper>
            {isLoading ? (
                <LoadingSpinner />
            ) : data && data.length !== 0 ? (
                <>
                    {data.slice(0).reverse().map((props: SingleRecord) => (
                        <PokeListItem
                            key={props.id}
                            {...props}
                        />
                    ))}
                </>
            ) : (
                <p>Empty data</p>
            )}
            {hasError && <p>An error has occurred...</p>}
        </PokeListWrapper>
    )
}

export default PokeList