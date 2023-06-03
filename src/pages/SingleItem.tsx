import { useEffect, useState } from "react"
import { fetchSingleKantoRandom } from "../utils/api"


interface SingleRecord {
    id: number,
    name: string
}

const SingleItem = () => {
    const [data, setData] = useState<SingleRecord | null>(null)
    const [hasError, setHasError] = useState<boolean>(false)

    const getData = async () => {
        const dataReceived = await fetchSingleKantoRandom()
        // console.log(dataReceived);
        if (dataReceived === null) {
            setHasError(true)
            return
        } else if (dataReceived) {
            setData(dataReceived?.data)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    const randomNewRecordHandler = () => {
        getData()
    }


    return (
        <>
            <div>
                <button onClick={randomNewRecordHandler}>Random new</button>
                {data ? (
                    <>
                        <div key={data.id} ><div><h6 >{data.id}.  {data.name}</h6></div>
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`} alt="" /></div>
                    </>
                ) : (
                    <p>Loading...</p>

                )}
                {hasError && <p>An error has occured...</p>}
            </div>
        </>
    )
}

export default SingleItem